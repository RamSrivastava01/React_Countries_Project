import { useEffect, useState } from "react";
// import countriesData from "../countriesData.js";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
   const [countriesData, setCountriesData] = useState([]);
   useEffect(() => {
      async function getCountriesData() {
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
         // console.log(data.data.objects);
         setCountriesData(data.data.objects);
      }

      getCountriesData();
   }, []);

   return (
      <>
         <div className="countries-container">
            {/* {countriesData
               .filter((country) => {
                  return country.names.common.toLowerCase().includes(query);
               }) */}
            {countriesData
               .filter((country) => {
                  return country.names.common.toLowerCase().includes(query);
               })
               .map((country) => {
                  return (
                     <CountryCard
                        key={country.names.common}
                        name={country.names.common}
                        flag={country.flag.url_svg}
                        population={country.population}
                        region={country.region}
                        capital={country.capitals[0]?.name}
                     />
                  );
               })}
         </div>
      </>
   );
}
