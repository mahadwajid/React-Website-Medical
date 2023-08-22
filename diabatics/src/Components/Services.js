import Breadcrumb from "./Breadcrumb";
import '../Assessts/Services.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../Images/Banner8.png';
import img8 from './../Images/Logo2.png';
import img9 from './../Images/Logo3.png';
import img10 from './../Images/Logo4.png';
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Services(){
    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/Services", active: true },
      ]; 

      const cardContent = [
        {
          image: img8,
          title: 'Diabetes Care',
          paragraph: 'Caring for your diabetes is something that can often be overlooked but is very important.',
        },
        {
          image: img9,
          title: 'Obesity Care',
          paragraph: 'Obesity is a medical condition in which the surplus body fat accumulates to the extent that it',
        },
        {
          image: img10,
          title: 'Nutrition Care',
          paragraph: 'Our proficient team of Clinical Nutrition and Dietetics helps patients understand the requisite',
        }
    
      ];


    return(
        <div>
             <div className="Ser-first-div">
                <div className="Ser-first-text-container">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 style={{color:"black"}}>Services</h1>
                </div>
                <img src={img1} className="Ser-first-div-image" alt="About Us Image" />
            </div>
        
        <div style={{textAlign:"center"}}>
            <h1>
                We Provide that Services
            </h1>
        </div>

<Link to="/Serviceshow" className="LinkStyle"> 
<section>
     
     <div className="row-1">
       <div className="column-1">
         <div className="card-1">
         <div class="icon-wrapper">
         <img src={img8} alt="Icon" /> 
       </div>
           <h3>Diabetes Care</h3>
           <p>
           Caring for your diabetes is something that can often be overlooked but is very important.
           </p>
         </div>
       </div>
       <div className="column-1">
         <div className="card-1">
           <div className="icon-wrapper">
           <img src={img9} alt="Icon" /> 
           </div>
           <h3 className="h3-text">Obesity Care</h3>
           <p>
           Obesity is a medical condition in which the surplus body fat accumulates to the extent that it
           </p>
         </div>
       </div>
       <div className="column-1">
         <div className="card-1">
           <div className="icon-wrapper">
           <img src={img10} alt="Icon" /> 
           </div>
           <h3>Nutrition Care</h3>
           <p>
           Our proficient team of Clinical Nutrition and Dietetics helps patients understand the requisite
           </p>
         </div>
       </div>

     </div>
   </section>
</Link>

        <Footer />
        </div>

        
    )
    
    
}
export default Services;