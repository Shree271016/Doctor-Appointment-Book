import express from 'express';
import { updateUser,deleteUser,getAllUser,getSingleUser } from '../Controllers/userController.js';

const router = express.Router();
// sabai user find garna ko lagi http://localhost:5000/api/v1/users
router.get('/', getAllUser);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;