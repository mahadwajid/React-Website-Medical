import React, { useEffect, useState } from "react";
import { deletepatientbyid, getPatientdata } from "../../Service/API";
import '../../Assessts/ShowPatientdata.css';

function ShowPatientdata() {
    const [patientDetails, setPatientDetails] = useState([]);
    const [filteredPatientDetails, setFilteredPatientDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    const deletePatientdata = async (id) =>{
        try{
            await deletepatientbyid(id);
            // Remove the deleted patient from the state
            setPatientDetails(prevState => prevState.filter(patient => patient._id !== id));
            setFilteredPatientDetails(prevState => prevState.filter(patient => patient._id !== id));
        }catch(error){
            console.log("Error deleting Blog", error);
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

                            <button>Modify The Data</button>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default ShowPatientdata;
