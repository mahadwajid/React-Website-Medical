import React, { useState } from "react";
import { addService } from "../../Service/API";
import 'react-quill/dist/quill.snow.css';

function AddService() {
    const [Servicedetails, setServicedetails] = useState({
        title: "",
        Content: "",
        image: null,
    });

    const { title, Content, image } = Servicedetails;

    const handleChange = (event) => {
        setServicedetails({ ...Servicedetails, [event.target.name]: event.target.value });
    };

    const handleImageChange = async (event) => {
        const selectedFile = event.target.files[0];
        try {
            
            setServicedetails({ ...Servicedetails, image: selectedFile });
        } catch (error) {
            console.error('Error converting image to base64:', error);
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Validate form fields here if needed
            if (!title || !Content || !image) {
                // Handle validation errors
                return;
            }

            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('Content', Content);
            formdata.append('image', image);
            console.log(formdata);
            await addService(formdata);
            alert('Data is Saved');
            // Clear the form or redirect to a confirmation page
        } catch (error) {
            console.log('Error:', error);
            // Handle and display error to the user
        }
    };

    return (
        <div className="adminblog-container">
            <div className="adminblog-form">
                <div className="col-md-6 mx-auto">
                    <h2 className="adminblog-heading text-center">Add Service</h2>
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

                        {/* React Quill for Content */}
                        {/* <div>
                            <label htmlFor="Content">Content</label>
                            <ReactQuill value={Content} onChange={handleContentChange} />
                        </div> */}

                        <div>
                            <label htmlFor="Content">Content</label>
                            <input
                                name="Content"
                                type="text"
                                id="Content"
                                value={Content}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="image">Images:</label>
                            <input
                                name="image"
                                type="file"
                                id="image"
                                onChange={handleImageChange}
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

export default AddService;
