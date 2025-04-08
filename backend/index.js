import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";


dotenv.config()


const app = express();

const port = process.env.PORT || 5000;


const corsOptions = {
    origin: ["https://medicareplus-nine.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  };

app.get('/', (req, res) => {
    res.send('✅Api Is Working')
});

mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            
            serverSelectionTimeoutMS: 5000,
        })
        console.log('✅ MongoDB Database is Connected')
    } catch (err) {
        console.log('❌ MongoDB Database Connection Failed:',err.message)
    }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);


app.listen(port, () => {
    connectDB();
    console.log("🚀 Server is Running on Port " + port)
})

