import { Link } from "react-router-dom";

export default function CountryCard({
   name,
   flag,
   population,
   region,
   capital,
}) {
   // console.log({ name, flag, population, region, capital });

   const displayName = typeof name === "object" ? name.common : name;
   return (
      <Link className="country-card" to={`/${displayName}`}>
         <div className="card-flag-container">
            <img
               src={flag ? flag : "  "}
               alt={`${displayName} Flag`}
               loading="lazy"
            />
         </div>
         <div className="card-text">
            <h2 className="card-title" title={displayName}>
               {displayName}
            </h2>
            <p>
               <span className="stat-label">Population:</span>
               <span className="stat-value">
                  {population ? population.toLocaleString("en-US") : "N/A"}
               </span>
            </p>
            <p>
               <span className="stat-label">Region:</span>
               <span className="stat-value">{region || "N/A"}</span>
            </p>
            <p>
               <span className="stat-label">Capital:</span>
               <span className="stat-value">{capital || "N/A"}</span>
            </p>
         </div>
      </Link>
   );
}
