import express from "express";
// const express=require('express')
import cors from "cors"
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

// Load environment variables from .env file
dotenv.config({path:"./config/config.env"});



const app=express()

// frontend to backend connection using middleware
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  method:["POST"],
  credentials:true,
}));


//store the object in json format.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// It is used for route(Use the reservation routes)
app.use('/api/v1/reservation',reservationRouter);

// connection database with server
dbConnection();

// Error handling middleware
app.use(errorMiddleware);


export default app;


