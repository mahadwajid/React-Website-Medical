import { useState } from "react";
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

    const handleImageChange = (event) => {
        setServicedetails({ ...Servicedetails, [event.target.name]: event.target.files[0] });
    };

    // const handleContentChange = (newContent) => {
    //     setServicedetails({ ...Servicedetails, content: newContent });
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('Content', Content);
            formdata.append('image', image);
            await addService(formdata);
            alert('Data is Saved');
        } catch (error) {
            console.log('Error:', error);
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
                            <label htmlFor="images">Images:</label>
                            <input
                                name="image"
                                type="file"
                                id="image"
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
    )
}
export default AddService;