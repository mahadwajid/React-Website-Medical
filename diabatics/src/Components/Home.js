import React, { useEffect, useRef, useState } from "react";
import img from "./../Images/Banner1.png";
import img2 from "./../Images/Banner2.png";
import img3 from "./../Images/Banner3.png";
import img4 from "./../Images/CardVision1.png";
import img5 from "./../Images/CardMission2.png";
import img6 from "./../Images/CardValue3.png";
import img7 from './../Images/Banner5.png';
import '../Assessts/Home.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "./Footer";
import { getService } from '../Service/API';
import { Link } from "react-router-dom";

function Home() {

  const [Service, setService] = useState([]);

  const carouselRef = useRef(null);



  const color = '#009AEE';

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      const currentActiveItem = carouselRef.current.querySelector(".carousel-item.active");
      const nextItem = currentActiveItem.nextElementSibling || carouselRef.current.querySelector(".carousel-item");

      currentActiveItem.classList.remove("active");
      nextItem.classList.add("active");
    }, 8000);

    return () => clearInterval(carouselInterval);
  }, []);



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
      <div id="carouselExample" className="carousel slide custom-carousel" ref={carouselRef}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

      <div style={{ margin: "20px 0", padding: "0 10px" }}>
        <h2 style={{ textAlign: "center", color, fontWeight: "bold" }}>
          Founders Message
        </h2>

        <p style={{ textAlign: "center" }}>
          From the first day of practice we have focus on patient centric diabetes and obesity management with medication and life style modification. As we believe prevention is better than cure. We don't only control the sugars we act on preventing further progression of diabetes/obesity and its complications. We provide all specialty services related to diabetes and obesity under one roof.
        </p>
        <div style={{ borderBottom: `2px solid black`, margin: "10px auto", width: "50%" }}></div>
      </div>

      <div>
        <CardGroup className="cards-container">
          <Card className="card">
            <div className="image-container">
              <Card.Img variant="top" src={img4} className="card-image" />
              <div className="transparent-overlay"></div>
              <div className="text-overlay">
                <h2 style={{ fontWeight: "bold" }}>Our Vision</h2>
                <h6>Is to cure and Prevent diabetes/Obesity</h6>
              </div>
            </div>
          </Card>
          <Card>
            <div className="image-container">
              <Card.Img variant="top" src={img5} className="card-image" />
              <div className="transparent-overlay"></div>
              <div className="text-overlay">
                <br></br>
                <h2 style={{ fontWeight: "bold" }}>Our Mission</h2>
                <h6>Our Mission is Excellence in Clinical Care, Education, Research, Community Services</h6>
              </div>
            </div>
          </Card>
          <Card>
            <div className="image-container">
              <Card.Img variant="top" src={img6} className="card-image" />
              <div className="transparent-overlay"></div>
              <div className="text-overlay">
                <br></br>
                <h2 style={{ fontWeight: "bold" }}>Our Value</h2>
                <h6>Empathy, Empowerment, Evidence based for everyone for everywhere</h6>
              </div>
            </div>
          </Card>
        </CardGroup>
        <div style={{ borderBottom: `2px solid black`, margin: "10px auto", width: "50%" }}></div>

      </div>


      <div class="image-containers">
        <img src={img7} alt="..." />
      </div>


      <div style={{ textAlign: "center" }}>
        <h2>
          We Specialized <br></br>
          Under One roof
        </h2>
      </div>


      <Link to="/Services" style={{textDecoration:"none"}}>
      <section className="card-row">
        {Service.map((details) => (
          
          <div className="card-1" key={details._id}>
            <div class="icon-wrapper">
              <img src={`https://diabaticdata.onrender.com/images/${details.image}`} alt="Icon" />
            </div>
            <div className="blog-content truncate">
              <h3>{details.title}</h3>
              <p>{details.Content}</p>
            </div>
          </div>
          
        ))}
      </section>
      </Link>
      <br />
      <Footer />
    </div>
  );
}

export default Home;
