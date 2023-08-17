import React, { useEffect, useState } from 'react';
import '../Assessts/Blog.css';
import { Link } from 'react-router-dom';
import { getBlogs } from '../Service/API';
import Footer from "./Footer";

function Blog() {
  const [blogdetails, setBlogdetails] = useState([]);

  useEffect(() => {
    getBlogdetails();
  }, []);

  const getBlogdetails = async () => {
    const result = await getBlogs();
    setBlogdetails(result.data);
    console.log(result.data);
  };

  const formatDate = (dateTimeString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {blogdetails.map((details) => (
        <div className="blog-card spring-fever" key={details._id}>
          <div className="blog-image">
            <img
              style={{ width: '20rem', height: '10rem' }}
              src={`http://localhost:5000/images/${details.image}`}
              alt=""
            />
          </div>
          <div className="blog-content truncate"> {/* Add the 'truncate' class here */}
            <h4>{details.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: details.content }} />
          </div>
          <div className="blog-date">
            <p>{formatDate(details.publishDateTime)}</p>
            <Link to={`/Blogshow/${details._id}`} className="read-more">
              <span className="licon icon-arr icon-black"></span>Read more
            </Link>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Blog;
