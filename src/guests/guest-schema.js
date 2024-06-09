import mongoose from "mongoose";

const {Schema, model } = mongoose;

const GuestSchema = new Schema({
    firstName : { type : String, required : true},
    lastName : {type : String, required : true},
    phoneNumber : {type : String, required  : true},
    email : {type : String, required : true},
    bookings : [{type : Schema.Types.ObjectId, ref : "bookings"}]
},{
    timestamps : true
})

export default model("Guests", GuestSchema)