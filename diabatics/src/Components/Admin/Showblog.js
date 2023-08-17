// import { useEffect, useState } from "react";
// import Admin from "./Admin";
// import Table from 'react-bootstrap/Table';
// import { getBlogs } from "../../Service/API";

// function Showblog(){
//     const[showblog, setshowblog]=useState([]);

//     useEffect(()=>{
//         getBlogdetails();
//     },[]);
    
//     const getBlogdetails = async() =>{
//         const result = await getBlogs();
//         setshowblog(result.data);
//     }

//     return(
//         <div>
//             <Admin />

//             <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>Image</th>
//           <th>Title</th>
//           <th>Content</th>
//           <th>Date</th>
//           <th>Author Name</th>
//           <th>Author Image</th>
//         </tr>
//       </thead>
//       <tbody>
//         {showblog.map((details)=>(
//              <th>{details.image}</th>
//         ))}
//       </tbody>
//     </Table>



//         </div>
//     )
// }
// export default Showblog;