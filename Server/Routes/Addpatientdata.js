import express from 'express';
import { createPatient, deletePatient, getPatientData } from '../Controller/Patientdata.js';

const router=express.Router();

router.post('/',createPatient);
router.get('/',getPatientData);
router.delete('/:id',deletePatient);


export default router;