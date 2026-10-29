import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

function Home() {
   const [query, setQuery] = useState("");
   const [region, setRegion] = useState("");

   return (
      <>
         <main>
            <div className="search-filter-container">
               <SearchBar setQuery={setQuery} />
               <SelectMenu region={region} setRegion={setRegion} />
            </div>
            <CountriesList query={query} region={region} />
         </main>
      </>
   );
}

export default Home;
