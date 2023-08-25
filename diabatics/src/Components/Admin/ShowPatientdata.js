import React, { useEffect, useState } from "react";
import { deletepatientbyid, getPatientdata, updatePatientData } from "../../Service/API";
import '../../Assessts/ShowPatientdata.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ShowPatientdata() {
    const [patientDetails, setPatientDetails] = useState([]);
    const [filteredPatientDetails, setFilteredPatientDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedPatient, setEditedPatient] = useState({});


    useEffect(() => {
        getPatientDetails();
    }, []);

    const getPatientDetails = async () => {
        const result = await getPatientdata();
        setPatientDetails(result.data);
        setFilteredPatientDetails(result.data);
    };

    const formatDate = (dateTimeString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateTimeString).toLocaleDateString(undefined, options);
    };

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            setFilteredPatientDetails(patientDetails);
        } else {
            // Filter patients whose names match the query
            const filteredPatients = patientDetails.filter(patient =>
                patient.patientname.toLowerCase().includes(query)
            );
            setFilteredPatientDetails(filteredPatients);
        }
    };

    const deletePatientdata = async (id) => {
        try {
            await deletepatientbyid(id);
            // Remove the deleted patient from the state
            setPatientDetails(prevState => prevState.filter(patient => patient._id !== id));
            setFilteredPatientDetails(prevState => prevState.filter(patient => patient._id !== id));
        } catch (error) {
            console.log("Error deleting Blog", error);
        }
    };

    const handleEditClick = (patient) => {
        setEditedPatient(patient);
        setShowEditModal(true);
    };

    const handleUpdatePatient = async () => {
        try {
            await updatePatientData(editedPatient._id, editedPatient);
            // Update the patient details in the state
            const updatedPatientDetails = patientDetails.map((patient) =>
                patient._id === editedPatient._id ? editedPatient : patient
            );
            setPatientDetails(updatedPatientDetails);
            setFilteredPatientDetails(updatedPatientDetails);
            setShowEditModal(false); // Close the edit modal
        } catch (error) {
            console.log("Error updating Patient Data", error);
        }
    };


    return (
        <div className="patient-container">
            <h2>Patients' Data</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Patient Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {filteredPatientDetails.map((patient, index) => (
                <div key={index}>
                    <h3>Patient Name: {patient.patientname}</h3>

                    <table className="patient-table">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Date:</strong> {formatDate(patient.date)}
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="6">
                                    <strong>Address</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6">{patient.patientaddress}</td>
                            </tr>

                            <tr>
                                <td colSpan="6">
                                    <strong>PhoneNo</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6">{patient.patientphoneno}</td>
                            </tr>


                            <tr>
                                <td colSpan="6">
                                    <strong>CO</strong>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6">{patient.co}</td>
                            </tr>
                            <tr>
                                <td colSpan="6">
                                    <strong>Investigation:</strong>
                                    <table className="sub-table">
                                        <tbody>
                                            {patient.investigation ? (
                                                <tr>
                                                    <td><strong>Blood Sugar:</strong> {patient.investigation.bloodSugar}</td>
                                                    <td><strong>HBA1C:</strong> {patient.investigation.hba1c}</td>
                                                    <td><strong>Serum Creatinine:</strong> {patient.investigation.serumCreatinine}</td>
                                                    <td><strong>Urine:</strong> {patient.investigation.urine}</td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan="5">No investigation data available</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6">
                                    <strong>Treatment:</strong> {patient.treatment}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6">
                                    <strong>Follow Up:</strong> {patient.followup}
                                </td>
                            </tr>
                            <button onClick={() => deletePatientdata(patient._id)}>Delete</button>

                            <button onClick={() => handleEditClick(patient)}>Edit Data</button>
                        </tbody>
                    </table>
                </div>
            ))}

            {/* Edit Patient Data Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Patient Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="patientname">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.patientname || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, patientname: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="patientaddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.patientaddress || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, patientaddress: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="patientphoneno">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.patientphoneno || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, patientphoneno: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="co">
                            <Form.Label>CO</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.co || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, co: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group controlId="investigation">
                            <Form.Label>Investigation</Form.Label>
                            <Form.Group controlId="bloodSugar">
                                <Form.Label>Blood Sugar</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editedPatient.investigation ? editedPatient.investigation.bloodSugar || '' : ''}
                                    onChange={(e) => {
                                        const updatedInvestigation = { ...(editedPatient.investigation || {}), bloodSugar: e.target.value };
                                        setEditedPatient({ ...editedPatient, investigation: updatedInvestigation });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="hba1c">
                                <Form.Label>HBA1C</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editedPatient.investigation ? editedPatient.investigation.hba1c || '' : ''}
                                    onChange={(e) => {
                                        const updatedInvestigation = { ...(editedPatient.investigation || {}), hba1c: e.target.value };
                                        setEditedPatient({ ...editedPatient, investigation: updatedInvestigation });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="serumCreatinine">
                                <Form.Label>Serum Creatinine</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editedPatient.investigation ? editedPatient.investigation.serumCreatinine || '' : ''}
                                    onChange={(e) => {
                                        const updatedInvestigation = { ...(editedPatient.investigation || {}), serumCreatinine: e.target.value };
                                        setEditedPatient({ ...editedPatient, investigation: updatedInvestigation });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="urine">
                                <Form.Label>Urine</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editedPatient.investigation ? editedPatient.investigation.urine || '' : ''}
                                    onChange={(e) => {
                                        const updatedInvestigation = { ...(editedPatient.investigation || {}), urine: e.target.value };
                                        setEditedPatient({ ...editedPatient, investigation: updatedInvestigation });
                                    }}
                                />
                            </Form.Group>
                        </Form.Group>



                        <Form.Group controlId="treatment">
                            <Form.Label>Treatment</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.treatment || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, treatment: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="followup">
                            <Form.Label>Follow Up</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedPatient.followup || ''}
                                onChange={(e) => setEditedPatient({ ...editedPatient, followup: e.target.value })}
                            />
                        </Form.Group>
                        {/* Add more Form.Group elements for other patient data fields */}
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdatePatient}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ShowPatientdata;
