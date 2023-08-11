import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
// import '../../Assessts/Adminblog.css';
import ReactQuill from 'react-quill';

function Adminblog() {
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState('');
  const [dateTime, setDateTime] = useState(new Date());

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileNames = selectedFiles.map((file) => file.name);
    const fileNamesStr = fileNames.join(', ');
    setFiles(fileNamesStr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', title, files, content, dateTime);
  };

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit} role="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label>Image</label>
              <div className="input-group">
                <span className="input-group-btn">
                  <span className="btn btn-primary btn-file">
                    Browse <input type="file" name="bimgs" multiple onChange={handleFileSelect} />
                  </span>
                </span>
                <input type="text" className="form-control" readOnly value={files} />
              </div>
            </div>
            <div className="form-group">
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                placeholder="Write something..."
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="Submit"
                value="Publish"
                className="btn btn-primary form-control"
              />
            </div>
            <div className="form-group">
              <p>Current Date and Time: {dateTime.toLocaleString()}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminblog;
