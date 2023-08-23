import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AddService from "./Components/Admin/AddServices";
import Admin from "./Components/Admin/Admin";
import Adminblog from "./Components/Admin/Adminblog";
import Patientdata from "./Components/Admin/Patientdata";
import ShowPatientdata from "./Components/Admin/ShowPatientdata";
import ShowService from "./Components/Admin/ShowService";
import Showblog from "./Components/Admin/Showblog";
import Blog from "./Components/Blog";
import Blogshow from "./Components/Blogshow";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navbar";
import PrivateRoutes from "./Components/ProtectedRoute";
import Services from "./Components/Services";
import ServiceShow from "./Components/Serviceshow";
import Whoweare from "./Components/Whoweare";
import { Routes, Route ,Navigate} from 'react-router-dom';
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

      <Route element={<PrivateRoutes />}>
        <Route path="/Admin" element={<Admin />} />

      </Route>



      <Route path="/Admin/Adminblog" element={<Adminblog />} />
      <Route path="/Admin/Showblog" element={<Showblog />} />
      <Route path="/Blogshow/:id" element={<Blogshow />} />
      <Route path="/Admin/Patientdata" element={<Patientdata />} />
      <Route path="/Admin/ShowPatientdata" element={<ShowPatientdata />} />
      <Route path="/Login" element={<Login />} />
       <Route path="/Servicesshow/:id" element={<ServiceShow />} />
       <Route path="/Admin/AddService" element={<AddService />} />
       <Route path="/Admin/ShowService" element={<ShowService />} />
    



      </Routes>



    </div>
  )
}

export default App;