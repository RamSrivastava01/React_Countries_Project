import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

function App() {
   return (
      <ThemeContext.Provider>
         <Header />
         <Outlet />
      </ThemeContext.Provider>
   );
}

export default App;
