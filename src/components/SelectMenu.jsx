export default function SelectMenu({ region, setRegion }) {
   return (
      <div className="select-container">
         <select
            className="filter-by-region"
            aria-label="Filter by Region"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
         >
            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
         </select>
         <i className="fa-solid fa-chevron-down select-icon"></i>
      </div>
   );
}
