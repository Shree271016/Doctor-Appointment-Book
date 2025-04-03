import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) =>{
    try {
        const reviews = await Review.find({});
        res.status(200).json({success:true, message:"successful ",data: reviews});

    } catch (err) {
        res.status(404).json({success:false, message:"Not found"});
        
    }
};


export const createReview = async (req, res) => {
    try {
        const doctorId = req.params.doctorId || req.body.doctor;
        if (!doctorId) {
            return res.status(400).json({ success: false, message: "Doctor ID is required" });
        }

        if (!req.userId) {
            return res.status(401).json({ success: false, message: "Unauthorized user" });
        }

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const newReview = new Review({
            doctor: doctorId,
            user: req.userId,
            reviewText: req.body.reviewText,
            rating: req.body.rating,
        });

        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(doctorId, {
            $push: { reviews: savedReview._id },
        });

        res.status(201).json({ success: true, message: "Review submitted", data: savedReview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
