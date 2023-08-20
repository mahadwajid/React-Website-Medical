import PatientModel from '../Model/Patientdata.js';

export const createPatient = async (req, res) => {
    const {
        patientname,
        date,
        co,
        bloodSugar,
        hba1c,
        serumCreatinine,
        urine,
        protein,
        treatment,
        followup
    } = req.body;

    try {
        const newPatient = PatientModel({
            patientname,
            date,
            co,
            investigation: {
                bloodSugar,
                hba1c,
                serumCreatinine,
                urine,
                protein,
            },
            treatment,
            followup
        });

        const savedData = await newPatient.save();
        console.log(savedData);

        res.json({ Response: true, message: 'Added Successfully ' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ Response: false, message: 'Server Error' });
    }
};


export const getPatientData = async (req , res) =>{
    try {
        const Patient= await PatientModel.find();
        res.status(200).json(Patient);
        
    } catch (error) {
     console.error('Error getting blogs:', error);
     res.status(500).json({ error: 'Internal server error' });
    }
}