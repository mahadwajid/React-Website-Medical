import React from "react";
import '../Assessts/Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub ,FaMapMarker, FaPhone, FaEnvelope} from 'react-icons/fa';
import img from '../Images/Image5.png';

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        {/* <h3>
          Company<span>logo</span>
        </h3> */}
        <img className="Footer-image"  src={img} />
        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Company Name © 2015</p>
      </div>

      <div className="footer-center">
      <div>
        <FaMapMarker />
        <p>
          <span>Clock Tower</span> Shamsi Road , Mardan
        </p>
      </div>
      <div>
        <FaPhone />
        <p>03009174503</p>
      </div>
      <div>
        <FaEnvelope />
        <p>
          <a href="mailto:support@company.com">wajidakbar123@gmail.com</a>
        </p>
      </div>
    </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>Clinic Diabetic and Obesity Care specializes in comprehensive treatments for diabetes and obesity, promoting health and well-being through expert medical care and personalized strategies.
        </p>
        <div className="footer-icons">
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaGithub />
      </a>
    </div>

      </div>
    </footer>
  );
}

export default Footer;
