import React, { useEffect, useState } from "react";
import { deleteServicebyid, getService, updateServicebyid } from "../../Service/API";
import Admin from "./Admin";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ShowService() {
  const [showService, setshowService] = useState([]);
  const [editedService, setEditedService] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getServicedetails();
  }, []);

  const getServicedetails = async () => {
    const result = await getService();
    setshowService(result.data);
  }

  const deleteService = async (id) => {
    try {
      await deleteServicebyid(id);
      const updateService = showService.filter((service) => service._id !== id);
      setshowService(updateService);
    } catch (error) {
      console.log("Error deleting Service", error);
    }
  };

  const handleEditClick = (service) => {
    setEditedService(service);
    setShowEditModal(true);
  };

  const handleUpdateService = async () => {
    try {
      // Send the PUT request to update the service data
      await updateServicebyid(editedService._id, editedService);

      // Update the showService state with the edited data
      setshowService((prevShowService) => {
        const updatedShowService = prevShowService.map((service) => {
          if (service._id === editedService._id) {
            return editedService; // Replace the edited service
          } else {
            return service;
          }
        });
        return updatedShowService;
      });

      setShowEditModal(false); // Close the edit modal
    } catch (error) {
      console.log("Error updating Service", error);
    }
  };


  return (
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
          {showService.map((details) => (
            <tr key={details._id}>
              <td>
                <img style={{ width: '4rem', height: '5rem' }} src={`http://localhost:3000/images/${details.image}`} alt="" />
              </td>
              <td>{details.title}</td>
              <td>
                <div className="truncate" dangerouslySetInnerHTML={{ __html: details.Content }} />
              </td>
              <td>
                <button onClick={() => deleteService(details._id)} >Delete</button>
                <button onClick={() => handleEditClick(details)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Service Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editedService.title || ''}
                onChange={(e) => setEditedService({ ...editedService, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={editedService.Content || ''}
                onChange={(e) => setEditedService({ ...editedService, Content: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateService}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowService;
