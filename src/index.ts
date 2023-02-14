import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import { MinKey } from "mongodb";

dotenv.config()


let PORT: string | undefined;
process.env.STATUS === "production"
    ? (PORT = process.env.PROD_PORT)
    : (PORT = process.env.DEV_PORT);

const mongoURI: string = process.env.MONGO_URI!;

const start = async () =>{

    try {
        await mongoose.connect(mongoURI);        
            app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            });//app.listen
        }//try

} // start

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello, World!");
})