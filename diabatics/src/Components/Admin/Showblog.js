// import { useEffect, useState } from "react";
// import Admin from "./Admin";
// import Table from 'react-bootstrap/Table';
// import { deleteblogbyid, getBlogs } from "../../Service/API";


// function Showblog(){
//     const[showblog, setshowblog]=useState([]);

//     useEffect(()=>{
//         getBlogdetails();
//     },[]);

//     const getBlogdetails = async() =>{
//         const result = await getBlogs();
//         setshowblog(result.data);
//     }

//     const deleteblog = async (id) =>{
//         try{
//             await deleteblogbyid(id);
//             const updateBlog = showblog.filter((blog) => blog._id !==id);
//             setshowblog(updateBlog);
//         }catch(error){
//             console.log("Error deleting Blog", error);
//         }
//     };

//     return(
//       <div>
//       <Table responsive striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Content</th>
//             <th>Date</th>
//             <th>Author Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {showblog.map((details) => (
//             <tr key={details._id}>
//               <td>
//                 <img
//                   style={{ width: '4rem', height: '5rem' }}
//                   src={`http://localhost:5000/images/${details.image}`}
//                   alt=""
//                 />
//               </td>
//               <td>{details.title}</td>
//               <td>
//                 <div className="truncate" dangerouslySetInnerHTML={{ __html: details.content }} />
//               </td>
//               <td>{details.publishDateTime}</td>
//               <td>{details.author}</td>
//               <td>
//                 <button onClick={() => deleteblog(details._id)}>Delete</button>
//                 <button>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//     )
// }
// export default Showblog;

import { useEffect, useState } from "react";
import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteblogbyid, getBlogs, updateBlogById } from "../../Service/API";
import he from 'he';



function Showblog() {
  const [showblog, setshowblog] = useState([]);
  const [editBlog, setEditBlog] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getBlogdetails();
  }, []);

  const getBlogdetails = async () => {
    const result = await getBlogs();
    setshowblog(result.data);
  }

  const deleteblog = async (id) => {
    try {
      await deleteblogbyid(id);
      const updateBlog = showblog.filter((blog) => blog._id !== id);
      setshowblog(updateBlog);
    } catch (error) {
      console.log("Error deleting Blog", error);
    }
  };

  const handleEditClick = (blog) => {
    setEditBlog(blog);
    setShowEditModal(true);
  };

  const handleUpdateBlog = async () => {
    try {
      await updateBlogById(editBlog._id, editBlog);
      // Automatically update the showblog state after successful update
      const updatedShowBlog = showblog.map((blog) =>
        blog._id === editBlog._id ? editBlog : blog
      );
      setshowblog(updatedShowBlog);
      setShowEditModal(false); // Close the edit modal
    } catch (error) {
      console.log("Error updating Blog", error);
    }
  };

  return (
    <div>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date</th>
            <th>Author Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showblog.map((details) => (
            <tr key={details._id}>
              <td>
                <img
                  style={{ width: '4rem', height: '5rem' }}
                  src={`http://localhost:5000/images/${details.image}`}
                  alt=""
                />
              </td>
              <td>{details.title}</td>
              <td>
                <div className="truncate" dangerouslySetInnerHTML={{ __html: details.content }} />
              </td>
              <td>{details.publishDateTime}</td>
              <td>{details.author}</td>
              <td>
                <button onClick={() => deleteblog(details._id)}>Delete</button>
                <button onClick={() => handleEditClick(details)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Blog Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editBlog.title || ''}
                onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={editBlog.content || ''}
                onChange={(e) => setEditBlog({ ...editBlog, content: e.target.value })}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateBlog}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Showblog;
