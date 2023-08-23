import { useEffect, useState } from "react";
import { deleteServicebyid, getService } from "../../Service/API";
import Admin from "./Admin";
import Table from 'react-bootstrap/Table';

function ShowService(){
    const[showService , setshowService]=useState([]);

    useEffect(()=>{
        getServicedetails();
    },[]);

    const getServicedetails = async() =>{
        const result = await getService();
        setshowService(result.data);
    }

    const deleteService = async (id) =>{
      try{
          await deleteServicebyid(id);
          const updateService = showService.filter((Service) => Service._id !==id);
          setshowService(updateService);
      }catch(error){
          console.log("Error deleting Blog", error);
      }
  };

    return(
        <div>
        <Admin />

        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Content</th>
    </tr>
  </thead>
  <tbody>
    {showService.map((details)=>(
         <tr key={details._id}>
            <img style={{ width: '4rem', height: '5rem' }} src={`http://localhost:5000/images/${details.image}`} alt="" />
            <td>{details.title}</td>
            <div className="truncate" dangerouslySetInnerHTML={{ __html: details.Content }} />

            <td>
            <button onClick={() => deleteService(details._id)} >Delete</button>
            <button>Edit</button>
          </td>

         </tr>
    ))}
  </tbody>
</Table>




    </div>
    )
}
export default ShowService;