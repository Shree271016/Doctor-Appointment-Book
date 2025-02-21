

import express from 'express'
import { register, login } from '../Controllers/authController.js'

const router = express.Router()
// Firstly we need to register in http://localhost:5000/api/v1/auth/register ma then login 
router.post('/register',register)
// http://localhost:5000/api/v1/auth/login
router.post('/login',login)

export default router