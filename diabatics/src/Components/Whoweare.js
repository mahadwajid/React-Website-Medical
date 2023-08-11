import React from "react";
import '../Assessts/Whoweare.css';
import Breadcrumb from "./Breadcrumb";
import img1 from '../Images/Banner6.png';
import img2 from '../Images/Banner7.png';

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
                <img src={img1} className="first-div-image" alt="About Us Image" />
            </div>


            <div className="Second-div">
  <div className="Image-Div">
    <img src={img2} className="second-div-image" alt="Image for Second Div" />
  </div>
  
  <div className="Right-div">
    <h2>
        Welcome to Diabetes and Obesity Care
    </h2>
    <p>
    Dr. Wajid Akbar, a dedicated healthcare professional, spearheads this website to raise awareness about diabetes and obesity. With a passion for promoting health and well-being, Dr. Akbar uses this platform to educate and empower individuals, fostering a healthier lifestyle and encouraging preventive measures. Through his expertise and commitment, he aims to make a positive impact on people's lives, spreading knowledge and emphasizing the importance of early intervention and healthy habits in managing these critical health concerns.
    </p>

    <p>Dr. Wajid Akbar's renowned clinic is conveniently situated in the heart of Mardan, specifically at the prominent landmark of Clock Tower on Shamsi Road. This strategic location ensures easy access for the community, offering a central hub for health and wellness services. Patients seeking expert guidance in managing diabetes and obesity can find solace in the clinic's dedicated care. Dr. Akbar's commitment to the well-being of his patients extends beyond medical expertise, as he strives to create a welcoming environment where individuals can receive comprehensive support and guidance on their journey to healthier lives. The clinic's location at Clock Tower Shamsi Road, Mardan, reflects Dr. Akbar's dedication to making quality healthcare accessible to the local community.</p>
  </div>
</div>

        </div>
    )
}
export default Whoweare;