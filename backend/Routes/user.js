import express from 'express';
import { updateUser, deleteUser, getAllUser, getSingleUser } from '../Controllers/userController.js';
import { authenticate ,restrict} from '../auth/verifyToken.js';

const router = express.Router();
// sabai user find garna ko lagi http://localhost:5000/api/v1/users
router.get('/',authenticate,restrict(["admin"]), getAllUser);
router.get('/:id',authenticate,restrict(["patient"]), getSingleUser);
router.put('/:id',authenticate,restrict(["patient"]), updateUser);
router.delete('/:id',authenticate,restrict(["patient"]), deleteUser);

export default router;