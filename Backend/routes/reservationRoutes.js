import express from "express";
import {sendReservation} from "../controller/reservation.js"
const router=express.Router();
// router.post("./send",sendReservation);
// Define the POST route for '/send'
router.post('/send', (req, res) => {
  // Your logic to handle the reservation request
  // Example response, replace with your actual logic
  res.status(200).json({ message: 'Reservation request received' });
});
export default router;

