import React, { useEffect, useState } from 'react';
import { getServicebyid } from '../Service/API';
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function ServiceShow() {
    const { id } = useParams();
    const[Serviceid, setServiceid]=useState([]);

    useEffect(()=>{
        getServicedet();
    },[]);


    const getServicedet = async () => {
        try {
            const response = await getServicebyid(id);
            setServiceid([response.data]);
        } catch (error) {
            console.log("Data Error...");
        }
    }


    return (
        <div>
        {Serviceid.map(details =>
                       <div key={details._id} className="Blog-container">
                <div className="Blog-img">
                    <img src={`https://diabaticdata.onrender.com/images/${details.image}`} alt="Blog Image" className="Full-width-img" />
                </div>

                <div className="Blog-Content">
                    <h2>{details.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: details.Content }} />
                </div>

            
            </div>

        )}

         
        <Footer />
    </div>
    );
}

export default ServiceShow;
