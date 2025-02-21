import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from '../Controllers/doctorController.js';

const router = express.Router();


// sabai register doctor nikalnalai http://localhost:5000/api/v1/doctors
router.get('/', getAllDoctor);
router.get('/:id', getSingleDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;