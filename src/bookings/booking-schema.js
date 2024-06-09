import mongoose from "mongoose";

const {Schema, model} = mongoose;

const BookingSchema = new Schema({
    status : {type : String, enum : ['booked', 'no-show', 'cancelled', 'fulfilled'], default : "booked"},
    guests : {type : Schema.Types.ObjectId, ref : "guests"}
},{
    timestamps : true
})

export default model("Bookings", BookingSchema)