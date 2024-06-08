import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints"

const server   = express()

const PORT = process.env.PORT || 3000

server.use(express.json())

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