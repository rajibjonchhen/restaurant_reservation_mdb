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
        const allGuests = await GuestModel.findOne({phoneNumber:req.body.phoneNumber})
        let guestId = allGuests?._id
        if(allGuests?._id !== null) {
            const newGuest = new GuestModel(req.body.guest)
            const addedGuest = await newGuest.save()
            guestId = addedGuest._id
        }
        const newBooking = {guest:guestId,bookedDate : req.body.bookedDate, bookedTime : req.body.bookedTime}
        const addBooking = new BookingModel(newBooking)
        const booking = await addBooking.save()
        const updatedGuest = await GuestModel.findByIdAndUpdate(guestId, {$push:{bookings:booking._id}},{new : true})

        res.send({message : "You have successfully booked", input:req.body, guestId, booking, updatedGuest })
    } catch (error) {
        console.error(error)
    }
})
export default bookingsRouter