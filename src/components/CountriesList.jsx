import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CountriesList({ query }) {
   const [countriesData, setCountriesData] = useState([]);

   const value = useContext(ThemeContext);
   console.log(value);

   useEffect(() => {
      async function getCountriesData() {
         try {
            const response = await fetch(
               "https://api.restcountries.com/countries/v5",
               {
                  headers: {
                     Authorization:
                        "Bearer rc_live_6cb93caa361b45429466e285ae825d9a",
                  },
               },
            );
            const data = await response.json();
            setCountriesData(data?.data?.objects || []);
         } catch (error) {
            console.error("Failed to fetch countries:", error);
         }
      }

      getCountriesData();
   }, []);

   if (!countriesData.length) {
      return <CountriesListShimmer />;
   }

   return (
      <div className="countries-container">
         {countriesData
            .filter((country) =>
               country.names?.common
                  ?.toLowerCase()
                  .includes(query?.toLowerCase() || ""),
            )
            .map((country) => {
               return (
                  <CountryCard
                     key={country.names.common}
                     name={country.names.common}
                     flag={country.flag?.url_svg}
                     population={country.population}
                     region={country.region}
                     capital={country.capitals?.[0]?.name}
                  />
               );
            })}
      </div>
   );
}
