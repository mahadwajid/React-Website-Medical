import Breadcrumb from "./Breadcrumb";
import '../Assessts/Services.css';
import img1 from '../Images/Banner8.png';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getService } from '../Service/API';

function Services() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/Services", active: true },
  ];

  const [Service, setService] = useState([]);

  useEffect(() => {
    getServicedetails();
  }, []);


  const getServicedetails = async () => {
    const result = await getService();
    setService(result.data);
    console.log(result.data);
  };


  return (
    <div>
      <div className="Ser-first-div">
        <div className="Ser-first-text-container">
          <Breadcrumb items={breadcrumbItems} />
          <h1 style={{ color: "black" }}>Services</h1>
        </div>
        <img src={img1} className="Ser-first-div-image" alt="..." />
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>
          We Provide that Services
        </h1>
      </div>


      <section className="card-row">
        {Service.map((details) => (
          <div className="card-1" key={details._id}>
            <div class="icon-wrapper">
              <img src={`https://erin-octopus-kit.cyclic.app/images/${details.image}`} alt="Icon" />
            </div>
            <div className="blog-content truncate">
              <h3>{details.title}</h3>
              <p>{details.Content}</p>
            </div>
            <Link to={`/Servicesshow/${details._id}`}  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span style={{alignContent:"center"}} ></span>Read more
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </div>


  )


}
export default Services;