const express = require("express");
const dotenv= require( "dotenv");
const mongoose = ("mongoose");

dotenv.config();

let PORT;
process.env.STATUS === "production" ? (PORT = 80) : (PORT = 3011);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI);
const db = mongoose.connection;

db.on("error", (error)=>{
    console.log(error);
}) //db.on(error)

db.once("connected", () => {
    console.log("Database connected!");
})
const app = express();

app.use("/keikat", routes);

app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Server running at ${PORT}`)
})
