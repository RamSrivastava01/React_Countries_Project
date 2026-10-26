import { useState, useEffect } from "react";

function Header() {
   const [isDark, setIsDark] = useState(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
         return savedTheme === "dark";
      }
      return (
         document.body.classList.contains("dark") ||
         (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
   });

   useEffect(() => {
      if (isDark) {
         document.body.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.body.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [isDark]);

   return (
      <header className="header-container">
         <div className="header-content">
            <h1 className="title">
               <a href="/">
                  <i className="fa-solid fa-earth-americas globe-icon"></i>
                  <span>Where in the world?</span>
               </a>
            </h1>
            <button
               className="theme-changer"
               onClick={() => setIsDark((prev) => !prev)}
               type="button"
               aria-label="Toggle color theme"
            >
               <i
                  className={isDark ? "fa-solid fa-sun" : "fa-regular fa-moon"}
               />
               <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
         </div>
      </header>
   );
}

export default Header;
