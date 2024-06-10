import mongoose from "mongoose";

const {Schema, model} = mongoose;

const BookingSchema = new Schema({
    status : {type : String, enum : ['booked', 'no-show', 'cancelled', 'fulfilled'], default : "booked"},
    bookedDate : {type : String, required : true},
    bookedTime : {type : String, required : true},
    guest : {type : Schema.Types.ObjectId, ref : "guests"}
},{
    timestamps : true
})

export default model("Bookings", BookingSchema)