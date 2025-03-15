import express from 'express';
import { updateUser, deleteUser, getAllUser, getSingleUser, getUserProfile, getMyAppointments } from '../Controllers/userController.js';
import { authenticate ,restrict} from '../auth/verifyToken.js';

const router = express.Router();
// sabai user find garna ko lagi http://localhost:5000/api/v1/users
// Get all users (admin only)
router.get('/',authenticate,restrict(["admin"]), getAllUser);
// Get a single user (patient only)
router.get('/:id',authenticate,restrict(["patient"]), getSingleUser);
// Update a user (patient only)
router.put('/:id',authenticate,restrict(["patient"]), updateUser);
// Delete a user (patient only)
router.delete('/:id',authenticate,restrict(["patient"]), deleteUser);

// Get logged-in user's profile
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
// Get user's appointments
router.get("/appointments/my-appointments",authenticate,restrict(["patient"]),getMyAppointments);

export default router;