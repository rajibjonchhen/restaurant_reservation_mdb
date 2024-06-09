import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints"
import guestsRouter from "./guests/guest.js";
import cors from "cors"
import bookingsRouter from "./bookings/bookings.js";
const server   = express()

const PORT = process.env.PORT || 3000

server.use(express.json())

//************************* Cors ***************************//
const whiteListOrigin = [process.env.PROD_URL, process.env.DEV_URL]
server.use(cors({
    origin : function (origin, next){
        if(!origin || whiteListOrigin.indexOf(origin) !== -1){
            next(null, true)
        }else{
            next(new Error("Not allowed by CORS"))
        }
    }
}))


//************************* Routes *****************************//
server.use("/guests", guestsRouter)
server.use("/bookings", bookingsRouter)

mongoose.connect(process.env.DB_CONNECTION)
mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongodb")
})
server.listen(PORT, () => {
    console.table(listEndpoints(server))
    console.log("Server is running on port - ", PORT)
})
server.on("error", (error) => {
    console.log("Server has stopped")
})