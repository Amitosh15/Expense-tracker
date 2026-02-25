import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="flex">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
