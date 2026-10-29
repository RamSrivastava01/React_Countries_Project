export default function CountryDetailShimmer() {
   return (
      <main>
         <div className="country-details-container shimmer-container">
            <div className="shimmer-back-btn shimmer-bg"></div>

            <div className="country-details">
               <div className="details-shimmer-flag shimmer-bg"></div>

               <div className="details-text-container">
                  <div className="shimmer-line details-shimmer-title shimmer-bg"></div>

                  <div className="details-text">
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                     <div className="shimmer-line details-shimmer-line shimmer-bg"></div>
                  </div>

                  <div className="border-countries details-shimmer-borders">
                     <div className="shimmer-line details-shimmer-border-title shimmer-bg"></div>
                     <div className="border-tags-list">
                        <div className="shimmer-tag shimmer-bg"></div>
                        <div className="shimmer-tag shimmer-bg"></div>
                        <div className="shimmer-tag shimmer-bg"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}

