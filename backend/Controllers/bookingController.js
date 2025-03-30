import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Booking from '../models/BookingSchema.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {
    try {

        // get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        if (!doctor) return res.status(404).json({ success: false, message: "Doctor not found" });
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });


        if (!process.env.STRIPE_SECRET_KEY || !process.env.CLIENT_SITE_URL) {
            throw new Error("Stripe Secret Key or Client Site URL not set in .env");
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        // creat stripe session

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${process.env.CLIENT_SITE_URL}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data: {
                        currency: 'npr',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo]

                        },
                    },
                    quantity: 1,

                },
            ],
        });

        // create new booking
        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            session: session.id,
        });
        await booking.save();

        await Doctor.findByIdAndUpdate(
            doctor._id,
            { $push: { appointments: booking._id } },
            { new: true }
        );
        
        res.status(200).json({ success: true, message: "Sussessfully Paid", session });

    } catch (err) {
       
        res.status(500).json({ success: false, message: "Error creating checkout session" });
    }
};

export const updatePaymentStatus = async (req, res) => {
    try {
        const { bookingId, paymentStatus } = req.body;

        // Find and update the appointment
        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId,
            { isPaid: paymentStatus === "success" },
            { new: true }
        );

        if (!updatedBooking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        res.status(200).json({ success: true, message: "Payment status updated", updatedBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};