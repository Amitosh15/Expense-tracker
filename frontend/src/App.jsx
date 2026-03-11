import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="main flex">
      <GlobalProvider>
        <Navigation />
        <Outlet />
      </GlobalProvider>
    </div>
  );
}

export default App;
