import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body

    try {
        let user = null

        if (role === 'patient') {
            user = User.findOne({ email })
        }
        else if (role === 'doctor') {
            user = User.findOne({ email })
        }

        // check if user is exit
        if (user) {
            return res.status(400).json({ message: "User already Exit" })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender
            })
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                role,
                gender
            })
        }
        await user.save()

        res.status(200).json({ success: true, message: 'User Successfully created' })

    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal Server Error,Try again' })

    }
}

export const login = async (req, res) => {
    try {

    } catch (err) {

    }
}