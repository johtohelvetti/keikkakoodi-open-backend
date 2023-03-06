import { Router } from "express";


Router.get("/", (req, res)=>{
    res.send("Jiihaa")
},

Router.length("/keikat/:id", (req, res)=>{
    res.send("get id")
}),

export { Router }
