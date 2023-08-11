import React, { useEffect, useRef } from "react";
import img from "./../Images/Banner1.png";
import img2 from "./../Images/Banner2.png";
import img3 from "./../Images/Banner3.png";
import img4 from "./../Images/CardVision1.png";
import img5 from "./../Images/CardMission2.png";
import img6 from "./../Images/CardValue3.png";
import img7 from './../Images/Banner5.png';
import img8 from './../Images/Logo2.png';
import img9 from './../Images/Logo3.png';
import img10 from './../Images/Logo4.png';

import '../Assessts/Home.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "./Footer";

function Home() {
  const carouselRef = useRef(null);
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ margin: "20px 0", padding: "0 10px" }}>
        <h2 style={{ textAlign: "center", color, fontWeight: "bold" }}>
          Founders Message
        </h2>

        <p style={{ textAlign: "center" }}>
          From the first day of practice we have focus on patient centric diabetes management with medication and holistic approach. As we believe prevention is better than cure. We don't only control the sugars we act on preventing further progression of diabetes and its complications. We provide all specialty services related to diabetes under one roof.
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
                <h6>Is to cure and Prevent diabetes</h6>
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
    <img src={img7} alt="Image" />
  </div>


      <div style={{ textAlign: "center" }}>
        <h2>
          We Specialized <br></br>
          Under One roof
        </h2>
      </div>

      <div>
  <Row xs={1} md={6} className="g-3">
    {cardContent.map((content, idx) => (
      <Col key={idx} md={4}>
        <Card
          style={{ height: '30vh' }}
          className="card-cont"
          onMouseEnter={(e) => e.currentTarget.classList.add('blue-bg')}
          onMouseLeave={(e) => e.currentTarget.classList.remove('blue-bg')}
        >

          <div className="card-cont">
            <div className="image-cont">
              <Card.Img variant="top" src={content.image} />
            </div>
            <Card.Body className="Card-body"> 
            
                <Card.Title>{content.title}</Card.Title>
                <Card.Text>{content.paragraph}</Card.Text>
            </Card.Body>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</div>








    <br />
    <Footer />
    </div>
  );
}

export default Home;
