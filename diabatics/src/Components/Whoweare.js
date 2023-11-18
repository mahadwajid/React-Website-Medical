import React from "react";
import '../Assessts/Whoweare.css';
// import img1 from '../Images/Banner6.jpg';
import img2 from '../Images/Banner7.jpg';
import img3 from '../Images/Image13.jpg';
import img4 from '../Images/Profile.jpg';
import img8 from "../Images/Vision.jpg";
import img9 from '../Images/image18.png';
import Footer from "./Footer";

function Whoweare() {
    return (
        // <section className="div-1">
        //     <div className="First-About">
        //         <div className="First-Image">
        //             <img src={img2} alt=".." />
        //         </div>
        //         <div className="Second-div">
        //             <h1 style={{ fontWeight: "bolder" }}>Welcome</h1>
        //             <p style={{ fontWeight: "bolder", textAlign: "justify" }} >Welcome to Our Website: Diaebetes, Obesity prevention and Management Care. We're here to provide you with expert guidance on understanding and tackling Diaebtes and or obesity. Explore our resources for a healthier future.</p>
        //         </div>
        //     </div>

        //     <div className="Second-About">
        //         <div className="Second-Image">
        //             <img className="img-2" src={img3} alt="..." />
        //         </div>

        //         <div className="Sec-div">
        //             <h1 style={{ fontWeight: "bolder" }}>Our Story</h1>
        //             <p style={{ fontWeight: "bolder", textAlign: "justify" }} >The story of Diabetes and Obesity began with our founder, Dr. Wajid Akbar, a dedicated healthcare professional with a passion for tackling these critical health issues. Driven by a desire to improve lives, he established our platform to provide valuable insights and support for those facing diabetes and obesity challenges.</p>
        //         </div>


        //     </div>

        //     <div className="Third-About">

        //         <div className="Third-Image">
        //             <img src={img8} alt="..." />
        //         </div>
        //         <div className="Third-div">
        //             <h1 style={{ fontWeight: "bolder" }}>Our Vision</h1>
        //             <p style={{ fontWeight: "bolder", textAlign: "justify" }} >Our vision is to create a world where diabetes and obesity are not barriers to a fulfilling life. We aspire to be a beacon of hope and knowledge, offering accessible resources and expert guidance to empower individuals in managing these health conditions effectively. Through education, support, and advocacy, we aim to promote a healthier and happier global community, free from the limitations of diabetes and obesity</p>
        //         </div>


        //     </div>
         

        //     {/* <div className="Card-div">
        //         <h1>Meet Our Doctor</h1>
        //     </div> */}

        //     {/* <div className="Profile-div">
        //         <div className="ProfileImage-div">
        //             <img src={img4} alt=".." />
        //         </div>

        //         <div className="Text-div">
        //             <h2>ASSOCIATE PROFESSOR</h2>
        //             <h3>DR WAJID AKBAR</h3>
        //             <p>Bacha khan Medical College</p>
        //             <p> M.D, Mphil, Dip.Diabetes, CHPE</p>
        //             <p> Memeber of American College of Physician</p>
        //             <p> Associate Royal college of Physician</p>

        //         </div>

        //     </div> */}
        //     <br />
        //     <Footer />
        // </section>


        <div>
            <section id="home">
        <div class="home-left">
            <img src={img2} alt="" />
        </div>
        <div class="home-right">
            <h2 class="home-heading"> Welcome To Diabatic Care </h2>
            <p class="home-para"> Diaebetes, Obesity prevention and Management Care. We're here to provide you with expert guidance on understanding and tackling Diaebtes and or obesity. Explore our resources for a healthier future</p>
        </div>
    </section>

    <section id="workFlow">
        <h2 class="heading"> Unveiling the Tale of Diabetes and Obesity Advocacy</h2>
        <p class="para">The story of Diabetes and Obesity began with our founder, Dr. Wajid Akbar, a dedicated healthcare professional with a passion for tackling these critical health issues. <br></br>Driven by a desire to improve lives, he established our platform to provide valuable insights and support for those facing diabetes and obesity challenges </p>
        <div class="num-container">
            <div class="num-item"><span>27,882 <br></br>Patients</span></div>
            <div class="num-item"><span>90% <br></br>Action Plans</span></div>
            <div class="num-item"><span>70,592<br></br>Downloads</span></div>
        </div>
    </section>


    <section id="goal">
        <div class="goal-left">
            <h2>Our Goal</h2>
            <p>
            Our vision is to create a world where diabetes and obesity are not barriers to a fulfilling life. We aspire to be a beacon of hope and knowledge, offering accessible resources and expert guidance to empower individuals in managing these health conditions effectively. Through education, support, and advocacy, we aim to promote a healthier and happier global community, free from the limitations of diabetes and obesity
            </p>
           
        </div>
        <div class="goal-right">
            <img src={img3} alt="" />
        </div>
    </section>

    {/* <section id="our-Team">
        <h2>Our Member</h2>
        <div class="teamContainer">
            <div class="team-item">
                <img src={img4} alt="" />
                <h2>ASSOCIATE PROFESSOR</h2>
                  <h3>DR WAJID AKBAR</h3>
                 <p>Bacha khan Medical College</p>
                  <p> M.D, Mphil, Dip.Diabetes, CHPE</p>
                  <p> Memeber of American College of Physician</p>
                  <p> Associate Royal college of Physician</p>
            </div>
           
        </div>
    </section> */}

    <Footer />


    
        </div>
        
    )
}
export default Whoweare;