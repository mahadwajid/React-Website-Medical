import React from "react";
import '../Assessts/Whoweare.css';
import Breadcrumb from "./Breadcrumb";
import img1 from '../Images/Banner6.png';
import img2 from '../Images/Banner7.png';
import img3 from '../Images/Image13.png';
import Footer from "./Footer";

function Whoweare() {
    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Who we are", path: "/Whoweare", active: true },
    ];

    return (
        <div>
            <div className="first-div">
                <div className="first-text-container">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1>About Us</h1>
                </div>
                <img src={img1} className="first-div-image" alt=".." />
            </div>

            <div className="about-page">
                <div className="brand-detail">
                    <span className='brand-img'>
                        <img src={img2} alt='..' />
                    </span>
                    <span className='brand-text'>
                        <h4>Welcome</h4>
                        <p>"Welcome to Our Website: Obesity and Management Care. We're here to provide you with expert guidance on understanding and tackling obesity. Explore our resources for a healthier future."

                        </p>
                    </span>
                </div>
                <div className="brand-story">
                    <span className='story-detail'>
                        <h4>Our Story</h4>
                        <p>The story of Diabetes and Obesity began with our founder, Dr. Wajid Akbar, a dedicated healthcare professional with a passion for tackling these critical health issues. Driven by a desire to improve lives, he established our platform to provide valuable insights and support for those facing diabetes and obesity challenges.</p>
                    </span>
                    <span className='story-img'>
                        <img src={img3} alt='' />
                    </span>
                </div>
                <div className='brand-vision'>
                    <span className='vision-img'>
                        {/* <img src= {vision} alt='' /> */}
                    </span>
                    <span className='vision-detail'>
                        <h4>Our Vision</h4>
                        <p>Our vision is to create a world where diabetes and obesity are not barriers to a fulfilling life. We aspire to be a beacon of hope and knowledge, offering accessible resources and expert guidance to empower individuals in managing these health conditions effectively. Through education, support, and advocacy, we aim to promote a healthier and happier global community, free from the limitations of diabetes and obesity</p>
                    </span>
                </div>
                <br />
                <h2>Meet Our Doctor</h2>
                <div className='team-member_1'>
                    <span className='member-1_img'>
                        {/* <img src= {myimage} alt=''/> */}
                    </span>
                    <span className='team-member_detail'>
                        <h4>DR WAJID AKBAR</h4>
                        <p>At WATCHGALLERY, we are proud to introduce our visionary founder and talented developer, ABDUL AZIZ . With a passion for watches and a deep understanding of technology, ABDUL AZIZ embarked on the journey to create a seamless online platform for watch enthusiasts worldwide.</p>
                    </span>
                </div>
            </div>




            <br />

            <Footer />
        </div>
    )
}
export default Whoweare;