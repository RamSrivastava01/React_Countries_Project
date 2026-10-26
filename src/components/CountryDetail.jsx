import { useEffect, useState } from "react";

export default function CountryDetail() {
   const countryName = new URLSearchParams(location.search).get("name");
   const [countryData, setCountryData] = useState(null);

   useEffect(() => {
      async function getCountryDetails() {
         if (!countryName) return;

         try {
            const response = await fetch(
               `https://api.restcountries.com/countries/v5?q=${encodeURIComponent(countryName)}`,
               {
                  headers: {
                     Authorization:
                        "Bearer rc_live_6cb93caa361b45429466e285ae825d9a",
                  },
               },
            );
            const data = await response.json();

            // Find the exact matching country
            const country =
               data?.data?.objects?.find(
                  (c) =>
                     c.names.common.toLowerCase() === countryName.toLowerCase(),
               ) || data?.data?.objects?.[0];

            setCountryData(country);
         } catch (error) {
            console.error("Failed to fetch country:", error);
         }
      }

      getCountryDetails();
   }, [countryName]);

   // Prevent crashes while waiting for the fetch to complete
   if (!countryData) {
      return (
         <main>
            <p style={{ textAlign: "center", marginTop: "40px" }}>
               Loading country details...
            </p>
         </main>
      );
   }

   return (
      <main>
         <div className="country-details-container">
            <span
               className="back-button"
               onClick={() => history.back()}
               style={{ cursor: "pointer" }}
            >
               <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
               <img
                  src={countryData.flag?.url_svg}
                  alt={`${countryData.names?.common} Flag`}
               />
               <div className="details-text-container">
                  <h1>{countryData.names?.common}</h1>
                  <div className="details-text">
                     <p>
                        <b>Native Name: </b>
                        <span>
                           {Object.values(countryData.names?.native || {})[0]
                              ?.common || "N/A"}
                        </span>
                     </p>
                     <p>
                        <b>Population: </b>
                        <span>
                           {countryData.population
                              ? countryData.population.toLocaleString("en-US")
                              : "N/A"}
                        </span>
                     </p>
                     <p>
                        <b>Region: </b>
                        <span>{countryData.region || "N/A"}</span>
                     </p>
                     <p>
                        <b>Sub Region: </b>
                        <span>{countryData.subregion || "N/A"}</span>
                     </p>
                     <p>
                        <b>Capital: </b>
                        <span>
                           {countryData.capitals
                              ?.map((c) => c.name)
                              .join(", ") || "N/A"}
                        </span>
                     </p>
                     <p>
                        <b>Top Level Domain: </b>
                        <span>{countryData.tlds?.join(", ") || "N/A"}</span>
                     </p>
                     <p>
                        <b>Currencies: </b>
                        <span>
                           {countryData.currencies
                              ?.map((c) => c.name)
                              .join(", ") || "N/A"}
                        </span>
                     </p>
                     <p>
                        <b>Languages: </b>
                        <span>
                           {countryData.languages
                              ?.map((l) => l.name)
                              .join(", ") || "N/A"}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
