import express from "express";
import BookingModel from "./booking-schema.js"
import GuestModel from "../guests/guest-schema.js"
const bookingsRouter = express.Router()

bookingsRouter.get("/", async (req, res, next) => {
    try {
        const bookings = await BookingModel.find()
        console.log("bookings=",bookings)
        res.send({bookings})
    } catch (error) {
        console.error(error)
        next(createError(error))
    }
})

bookingsRouter.post("/register", async(req, res, next) => {
    try {
        console.log("register=",req.body)
        // const allGuests = await GuestModel.find({phoneNumber:req.body.phoneNumber})
        // if(allGuests.length < 1) {
        //     const newGuest = new GuestModel({...req.body.guest})
        //     const addedGuest = await newGuest.save()
        // }
        // const newBooking = {guests:addedGuest._id}
        // new BookingModel()
        // const booking = await newBooking.save()
        // res.send({message : "You have successfully booked"})
    } catch (error) {
        console.error(error)
    }
})
export default bookingsRouter