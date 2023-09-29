import React, { useEffect, useRef, useState } from "react";
import img from "./../Images/Banner1.webp";
import img2 from "./../Images/Banner2.webp";
import img3 from "./../Images/Banner3.webp";
import img4 from "./../Images/CardVision1.webp";
import img5 from "./../Images/CardMission2.webp";
import img6 from "./../Images/CardValue3.webp";
import img7 from './../Images/Banner5.webp';
import '../Assessts/Home.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "./Footer";
import { getService } from '../Service/API';
import { Link } from "react-router-dom";

function Home() {

  const [Service, setService] = useState([]);
  const carouselRef = useRef(null);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);
  const color = '#009AEE';

  useEffect(() => {
    getServicedetails();
  }, []);

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
    // Delay the transition by a few milliseconds to allow the component to render
    setTimeout(() => {
      carouselRef.current.classList.add('show-carousel');
    }, 100);
  }, []);

  useEffect(() => {
    // Use setTimeout to control when each card becomes visible
    const timeouts = cardVisibility.map((_, index) =>
      setTimeout(() => {
        setCardVisibility((prevVisibility) =>
          prevVisibility.map((value, i) => (i === index ? true : value))
        );
      }, 800 * index) // Adjust the delay as needed (500ms between each card)
    );
  
    // Clear the timeouts when the component unmounts to avoid memory leaks
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  },[]);
  

  const getServicedetails = async () => {
    const result = await getService();
    setService(result.data);
    console.log(result.data);
  };

  return (
    <div>
       <div
      id="carouselExample"
      className="carousel slide custom-carousel"
      ref={carouselRef}
    ></div>
      <div id="carouselExample" className="carousel slide custom-carousel" ref={carouselRef}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." loading="eager" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." loading="eager" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." loading="eager" />
          </div>
        </div>
  
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
          <Card className={`card ${cardVisibility[0] ? 'visible' : ''}`}>
            <div className="image-container">
              <Card.Img variant="top" src={img4} className="card-image" loading="eager" />
              <div className="transparent-overlay"></div>
              <div className="text-overlay">
                <h2 style={{ fontWeight: "bold" }}>Our Vision</h2>
                <h6>Is to cure and Prevent diabetes/Obesity</h6>
              </div>
            </div>
          </Card>
          <Card className={`card ${cardVisibility[1] ? 'visible' : ''}`}>
            <div className="image-container">
              <Card.Img variant="top" src={img5} className="card-image" loading="eager" />
              <div className="transparent-overlay"></div>
              <div className="text-overlay">
                <br></br>
                <h2 style={{ fontWeight: "bold" }}>Our Mission</h2>
                <h6>Our Mission is Excellence in Clinical Care, Education, Research, Community Services</h6>
              </div>
            </div>
          </Card>
          <Card className={`card ${cardVisibility[2] ? 'visible' : ''}`}>
            <div className="image-container">
              <Card.Img variant="top" src={img6} className="card-image" loading="eager" />
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
        <img src={img7} alt="..."  loading="eager"/>
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
              <img src={details.image.url} alt="Icon" loading="eager"  />
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
