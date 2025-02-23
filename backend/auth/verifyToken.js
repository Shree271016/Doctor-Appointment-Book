import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from "../models/UserSchema.js";


export const authenticate = async (req, res, next) => {
    // get token from header
    const authToken = req.headers.authorization;
    // check token is exots
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' })
    }
    try {
        const token = authToken.split(" ")[1];
        //    verufy token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.userId
        req.role = decoded.role
        next();
        //    must be call the next function
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' })

        }
        return res.status(401).json({ success: false, message: 'Invalid Token ' })

    }
};
// export const restrict = roles => async (req, res, next) => {
//     const userId = req.userId;

//     let user;

//     const patient = await User.findById(userId);
//     const doctor = await Doctor.findById(userId);

//     if (patient) {
//         user = patient;
//     }
//     if (doctor) {
//         user = doctor;
//     }

//     if (!roles.includes(user.role)) {
//         return res
//         .status(401)
//         .json({ success: false, message: "You're not authorized" })
//     }
//     next();

// };

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;
  
    // Check if userId is provided
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: "User ID not found in request ,You're not authorized" 
      });
    }
  
    let user;
  
    // Try to find the user in the User collection (patients)
    user = await User.findById(userId);
  
    // If not found in User collection, try the Doctor collection
    if (!user) {
      user = await Doctor.findById(userId);
    }
  
    // If user is still not found, return an error
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }
  
    // Check if the user's role is allowed
    if (!roles.includes(user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: "You're not authorized" 
      });
    }
  
    // If authorized, proceed to the next middleware/route
    next();
  };
