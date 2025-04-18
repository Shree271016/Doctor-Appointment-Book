import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            success: true, message: "Successfully updated",
            data: updatedDoctor,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });

    }
};
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await Doctor.findByIdAndDelete(id)
        res.status(200).json({
            success: true, message: "Successfully Deleted",

        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Delete" });

    }
};
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id).populate("reviews").select("-password");
        res.status(200).json({
            success: true, message: "Doctor found",
            data: doctor,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "No Doctor found" });

    }
};
export const getAllDoctor = async (req, res) => {

    try {

        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
            }).select("-password")
        } else {
            doctors = await Doctor.find({
                isApproved: "approved"
            }).select("-password")
        }

        res.status(200).json({
            success: true, message: "Doctors found",
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });

    }
};

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId)
            .select("-password")
            .populate({
                path: 'appointments',
                populate: {
                    path: 'user',
                    select: 'name email photo gender'
                }
            });
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }


        return res.status(200).json({
            success: true,
            message: "Profile info retrieved",
            data: doctor,
        });

    } catch (err) {
        return res.status(500).json({ success: false, message: "Something went wrong,Cannot get" });

    }
};

export const getDoctorAppointments = async (req, res) => {
    try {
        const doctorId = req.userId;
        const appointments = await Booking.find({ doctor: doctorId })
            .populate("user", "name email photo gender") 
            .sort({ createdAt: -1 }); 
        res.status(200).json({ success: true, appointments });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
