import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

function App() {
   return (
      <ThemeContext.Provider value={{ name: "dummy", age: 25 }}>
         <Header />
         <Outlet />
      </ThemeContext.Provider>
   );
}

export default App;
