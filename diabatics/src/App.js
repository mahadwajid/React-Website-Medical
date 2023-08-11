import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Blog from "./Components/Blog";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navbar";
import Services from "./Components/Services";
import Whoweare from "./Components/Whoweare";
import { Routes, Route } from 'react-router-dom';




function App(){
  return(
    <div>
   
     <Navigation />
     <br></br>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Whoweare" element={<Whoweare />} />
      <Route path="/Services" element={<Services />} />
      <Route  path="/Blog" element={<Blog />} />
      <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <br></br>
     <Footer />


    </div>
  )
}

export default App;