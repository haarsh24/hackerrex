import "./App.css";
import { routes } from "./config/routes"
import { useRoutes } from "react-router-dom"
import {Toast} from "./components/toast/toast";
import { ScrollToTop } from "./components/scrollToTop/scrollToTop";
import { Navbar } from "./components/navbar/navbar";
import { Modal } from "./components/modal/modal";
import { Footer } from "./components/footer/footer";

function App() {
  const routeElement = useRoutes(routes);
  return (
    <>
      <ScrollToTop />
      <Toast />
      <Modal/>
      <Navbar/>
      <div className="App  bg-[#07080B] text-[#9B9B9C]">
        {routeElement} 
      </div>
      <Footer/>
      </>
   
  );
}

export default App;
