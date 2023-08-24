import { useEffect, useState } from "react";
import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import { deleteblogbyid, getBlogs } from "../../Service/API";


function Showblog(){
    const[showblog, setshowblog]=useState([]);

    useEffect(()=>{
        getBlogdetails();
    },[]);
    
    const getBlogdetails = async() =>{
        const result = await getBlogs();
        setshowblog(result.data);
    }

    const deleteblog = async (id) =>{
        try{
            await deleteblogbyid(id);
            const updateBlog = showblog.filter((blog) => blog._id !==id);
            setshowblog(updateBlog);
        }catch(error){
            console.log("Error deleting Blog", error);
        }
    };

    return(
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
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    )
}
export default Showblog;