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

        <Footer />
        </div>

        
    )
    
    
}
export default Services;