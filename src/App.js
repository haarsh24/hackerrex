import "./App.css";
import { routes } from "./config/routes"
import { useRoutes } from "react-router-dom"
import { ScrollToTop, Toast} from "components"
import { Navbar } from "components/navbar/navbar";

function App() {
  const routeElement = useRoutes(routes);
  return (
    <>
        {/* <ScrollToTop />
      // <Toast />
       */}
      <Navbar/>
      <div className="App bg-[#07080B] text-[#9B9B9C]">
        {routeElement} 
      </div>
      </>
   
  );
}

export default App;
