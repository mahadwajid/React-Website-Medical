import { useState } from "react";
import { addPatientdata } from "../../Service/API";

function Patientdata() {
    const [patientDetails, setPatientDetails] = useState({
        patientname: '',
        date: '',
        patientaddress:'',
        patientphoneno:'',
        co: '',
        bloodSugar: '', 
        hba1c: '', 
        serumCreatinine: '',
        urine: '',  
        treatment: '',
        followup: '',
    });

    const { patientname, date, patientaddress, patientphoneno, co, bloodSugar, hba1c, serumCreatinine, urine, treatment, followup } = patientDetails;

    const handleChange = (event) => {
        setPatientDetails({ ...patientDetails, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addPatientdata(patientDetails);
            alert("Data Is Saved of the Patient");
        } catch (error) {
            console.log("Data Error ", error);
        }
    }

    return (
        <div className="adminblog-container">
            <div className="adminblog-form">
                <div className="col-md-6 mx-auto">
                    <h2 className="adminblog-heading text-center">Enter Patient Data</h2>
                    <form>
                        <div>
                            <label htmlFor="patientname">Patient Name</label>
                            <input
                                name="patientname"
                                type="text"
                                id="patientname"
                                value={patientname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input
                                name="date"
                                type="date"
                                id="date"
                                value={date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="patientaddress">Patient Address</label>
                            <input
                                name="patientaddress"
                                type="text"
                                id="patientaddress"
                                value={patientaddress}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="patientphoneno">Patient PhoneNo</label>
                            <input
                                name="patientphoneno"
                                type="text"
                                id="patientphoneno"
                                value={patientphoneno}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    
                        
                        <div>
                            <label htmlFor="co">CO</label>
                            <input
                                name="co"
                                type="text"
                                id="co"
                                value={co}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="bloodSugar">Blood Sugar</label>
                            <input
                                name="bloodSugar"
                                type="text"
                                id="bloodSugar"
                                value={bloodSugar}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="hba1c">HBA1C</label>
                            <input
                                name="hba1c"
                                type="text"
                                id="hba1c"
                                value={hba1c}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="serumCreatinine">Serum Creatinine</label>
                            <input
                                name="serumCreatinine"
                                type="text"
                                id="serumCreatinine"
                                value={serumCreatinine}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="urine">Urine</label>
                            <input
                                name="urine"
                                type="text"
                                id="urine"
                                value={urine}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div>
                            <label htmlFor="protein">Protein</label>
                            <input
                                name="protein"
                                type="text"
                                id="protein"
                                value={protein}
                                onChange={handleChange}
                            />
                        </div> */}
                        <div>
                            <label htmlFor="treatment">Treatment</label>
                            <textarea
                                name="treatment"
                                id="treatment"
                                value={treatment}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="followup">Followup</label>
                            <textarea
                                name="followup"
                                id="followup"
                                value={followup}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="btnadd" type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Patientdata;
