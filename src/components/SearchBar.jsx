export default function SearchBar({ setQuery }) {
   return (
      <div className="search-container">
         <i className="fa-solid fa-magnifying-glass search-icon"></i>
         <input
            type="text"
            name="search"
            id="search"
            placeholder="search your country"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
         />
      </div>
   );
}
