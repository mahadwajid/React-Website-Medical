import '../Assessts/Blog.css';
import Breadcrumb from './Breadcrumb';
import Table from 'react-bootstrap/Table';
import img1 from '../Images/Banner9.png';
import Footer from './Footer';

function Blog(){

    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Blog", path: "/Blog", active: true },
      ];

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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>


            </div>

        <Footer />
        </div>
    )
}
export default Blog;