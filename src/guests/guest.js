import express from "express";
import GuestModel from "./guest-schema.js";

const guestsRouter = express.Router()

guestsRouter.get("/", async(req, res, next) => {
    try {
        const guests = await GuestModel.find()
        res.send({guests})
    }catch (error){
        console.log(error);
        next(createError(error))
    }
})
export default guestsRouter