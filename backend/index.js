import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// 👇 load environment variables from .env file and call the config function 
dotenv.config()


// 👇then  create app instance
const app = express();
// 👇define port
const port = process.env.PORT || 8000; 


// for configuring course behavior we will use course option object
const corsOptions = {
    origin:true,
}

app.get('/',(req,res)=>{
    res.send('Api Is Working')
})
// we will use middleware and we are going to perse this on data
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// to test the server we have to listen the app 

app.listen(port,()=>{
    console.log("Server is Running on Port " + port)
})

