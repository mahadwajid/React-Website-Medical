import React from 'react';
import Modal from 'react-bootstrap/Modal';

function UserProfileModal({ show, email, onClose, onLogout }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Welcome ,{email}</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onLogout}>Logout</button>
        <button onClick={onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserProfileModal;
