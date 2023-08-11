import '../Assessts/Blog.css';
import Breadcrumb from './Breadcrumb';
import Table from 'react-bootstrap/Table';
import img1 from '../Images/Banner9.png';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { getBlogs } from '../Service/API';

function Blog(){

    const[blogdetails , setblogdetails]=useState([]);

    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Blog", path: "/Blog", active: true },
      ];

      useEffect(()=>{
        getblogdetails();
      },[]);

      const getblogdetails= async()=>{
        const result=await getBlogs();
        setblogdetails(result.data);
        console.log(result.data);
      }

    return(
     
        <div>
              <div className="Blog-first-div">
                <div className="Blog-first-text-container">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 style={{color:"black"}}>Blogs</h1>
                </div>
                <img src={img1} className="Blog-first-div-image" alt="About Us Image" />
            </div>
        

            <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      

      {blogdetails.map((details , index)=>(
        <tbody>
    <tr key={index}>
        <td><img style={{width:"4rem", height:"5rem"}} src={`http://localhost:5000/${details.image}`} alt="" /></td>
        <td>{details.title}</td>
        <td>{details.files}</td> 
        <td>{details.content}</td>  
    </tr>
    </tbody>
))}
        
   
    </Table>


            </div>

        <Footer />
        </div>
    )
}
export default Blog;