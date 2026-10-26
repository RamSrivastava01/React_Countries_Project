export default function SelectMenu() {
   return (
      <div className="select-container">
         <select className="filter-by-region" aria-label="Filter by Region" defaultValue="">
            <option value="" disabled hidden>
               Filter by Region
            </option>
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
