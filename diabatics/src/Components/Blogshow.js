import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getblogbyid } from "../Service/API";
import '../Assessts/Blogshow.css';
import Footer from "./Footer";

function Blogshow() {
    const { id } = useParams();
    const [blogbyid, setblogbyid] = useState([]);

    useEffect(() => {
       getBlogsdetails();
        
    }, );

    const getBlogsdetails = async () => {
        try {
            const response = await getblogbyid(id);
            setblogbyid([response.data]);
        } catch (error) {
            console.log("Data Error...");
        }
    }

    return (
        <div>
            {blogbyid.map(details =>
                           <div key={details._id} className="Blog-container">
                    <div className="Blog-img">
                        <img src={`https://erin-octopus-kit.cyclic.app/images/${details.image}`} alt="..." className="Full-width-img" />
                    </div>

                    <div className="Blog-Content">
                        <h2>{details.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: details.content }} />
                    </div>

                    <div className="Author-container">
                        <div className="author-image">
                            <img src={`https://erin-octopus-kit.cyclic.app/images/${details.authorImage}`} alt="..." />
                        </div>
                        <div className="author-name">
                            <p>{details.author}</p>
                        </div>
                    </div>
                </div>

            )}

             
            <Footer />
        </div>
    );
}

export default Blogshow;
