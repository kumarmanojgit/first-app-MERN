import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minLength:[3,"first Name must contain 3 character!"],
    maxLength:[30,"first Name contain maxium 30 character"],
  },

  lastName:{
    type:String,
    required:true,
    minLength:[3,"last Name must contain 3 character!"],
    maxLength:[30,"last Name contain maxium 30 character!"],
  },
  email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"provide valid Email!"]
  },
  phone:{
    type:String,
    required:true,
    minLength:[10,"phone number must contain 10!"],
    maxLength:[10,"phone number must contain 10 digit"],
  },
  time:{
    type:String,
    required:true
  },
  date:{
    type: String,
    required:true,
  },
});
export const Reservation =mongoose.model("Reservation",reservationSchema);