import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../Assessts/Adminblog.css';
import { addBlog } from '../../Service/API';

function Adminblog() {
  const [details, setDetails] = useState({
    title: '',
    content: '',
    publishdate: '',
    publishTime: '',
    image: null,
  });

  const { title, content, publishdate, publishTime, image } = details;

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('title', title);
      formdata.append('content', content);

      formdata.append('publishDate', publishdate);

      formdata.append('image', image);

      

      await addBlog(formdata);
      alert('Data is Saved');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  

  return (
    <div className="adminblog-container">
      <div className="adminblog-form">
        <div className="col-md-6 mx-auto">
          <h2 className="adminblog-heading text-center">Add New Blog</h2>
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                id="title"
                value={title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                type="text"
                value={content}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="publishdate">Publish Date</label>
              <input
                name="publishdate"
                type="date"
                id="publishdate"
                value={publishdate}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div>
              <label htmlFor="publishTime">Publish Time</label>
              <input
                name="publishTime"
                type="time"
                id="publishTime"
                value={publishTime}
                onChange={handleChange}
                required
              />
            </div> */}
            <div>
              <label htmlFor="images">Images:</label>
              <input
                name="image"
                type="file"
                id="images"
                onChange={handleImageChange}
                multiple
                required
              />
            </div>
            <button className="btnadd" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminblog;
