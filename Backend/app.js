import express from "express";
// const express=require('express')
import cors from "cors"
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app=express()
dotenv.config({path:"./config/config.env"});


// frontend to backend connection using middleware
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  method:["POST"],
  credentials:true,
}));


//store the object in json format.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);
// connection database with server
dbConnection();
app.use(errorMiddleware);

export default app;


