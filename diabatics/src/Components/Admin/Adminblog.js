import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../Assessts/Adminblog.css';
import ReactQuill from 'react-quill';
import { addBlog } from '../../Service/API';

function Adminblog() {
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [publishTime, setPublishTime] = useState('');

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    const fileNamesStr = fileNames.join(', ');
    setFiles(fileNamesStr);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const publishDateTime = new Date(`${publishDate} ${publishTime}`);

    try {
      const blogData = {
        title,
        files,
        content,
        publishDateTime,
      };

      await addBlog(blogData); // Use the addBlog function from API.js
      console.log('Blog submitted successfully:', blogData);
    } catch (error) {
      console.error('Error submitting blog:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="adminblog-container">
      <div className="adminblog-form">
        <div className="col-md-12">
          <h2 className="adminblog-heading">Add New Blog</h2>
          <form onSubmit={handleSubmit} role="form">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <div className="input-group">
                <label className="btn btn-primary btn-file">
                  Browse <input type="file" name="bimgs" multiple onChange={handleFileSelect} />
                </label>
                <input type="text" className="form-control" readOnly value={files} />
              </div>
            </div>
            <div className="form-group">
              <label>Content:</label>
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                placeholder="Write something..."
              />
            </div>
            <div className="form-group">
              <label>Publish Date:</label>
              <input
                type="date"
                className="form-control"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Publish Time:</label>
              <input
                type="time"
                className="form-control"
                value={publishTime}
                onChange={(e) => setPublishTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminblog;
