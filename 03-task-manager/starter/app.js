import dotenv from "dotenv"
dotenv.config();

import express from "express"
import { router } from "./routes/user.routes.js";
import mongoose from "mongoose"

const app=express();
const DB_URI=process.env.DB_connect;

app.use(express.json())

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.use('/api/v1/users',router)

const CONNECT_DbServer=async()=>{
    try {
        mongoose.connect(DB_URI);
        console.log("Successfully connect with MongoDB");
        app.listen(port,()=>{
            console.log(`The server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Error to connect ",error.message);
    }
} 

CONNECT_DbServer()