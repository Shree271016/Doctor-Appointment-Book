import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from '../Controllers/doctorController.js';
import { authenticate,restrict } from '../auth/verifyToken.js';
const router = express.Router();


// sabai register doctor nikalnalai http://localhost:5000/api/v1/doctors
router.get('/', getAllDoctor);
router.get('/:id', getSingleDoctor);
router.put('/:id',authenticate,restrict(['doctor']), updateDoctor);
router.delete('/:id',authenticate,restrict(['doctor']), deleteDoctor);

export default router;