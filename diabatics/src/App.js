import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Admin from "./Components/Admin/Admin";
import Adminblog from "./Components/Admin/Adminblog";
import Blog from "./Components/Blog";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navbar";
import Services from "./Components/Services";
import Whoweare from "./Components/Whoweare";
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";




function App(){

  const location = useLocation();
  const showNavbar = !location.pathname.includes("/Admin");

  return(
    <div>
   
     {showNavbar && <Navigation />}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Whoweare" element={<Whoweare />} />
      <Route path="/Services" element={<Services />} />
      <Route  path="/Blog" element={<Blog />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Admin/Adminblog" element={<Adminblog />} />
      </Routes>



    </div>
  )
}

export default App;