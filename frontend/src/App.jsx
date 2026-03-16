import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { GlobalProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main flex">
      <GlobalProvider>
        <Navigation />
        <Outlet />
        <ToastContainer />
      </GlobalProvider>
    </div>
  );
}

export default App;
