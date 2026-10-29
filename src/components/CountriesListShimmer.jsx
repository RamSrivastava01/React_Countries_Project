export default function CountriesListShimmer() {
   return (
      <div className="countries-container">
         {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="country-card shimmer-card">
               <div className="shimmer-flag shimmer-bg"></div>
               <div className="card-text">
                  <div className="shimmer-line shimmer-title shimmer-bg"></div>
                  <div className="shimmer-line shimmer-text long shimmer-bg"></div>
                  <div className="shimmer-line shimmer-text medium shimmer-bg"></div>
                  <div className="shimmer-line shimmer-text short shimmer-bg"></div>
               </div>
            </div>
         ))}
      </div>
   );
}
