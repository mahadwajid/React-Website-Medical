import express from 'express';
import { createPatient, getPatientData } from '../Controller/Patientdata.js';

const router=express.Router();

router.post('/',createPatient);
router.get('/',getPatientData);

export default router;