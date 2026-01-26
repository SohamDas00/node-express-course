import dotenv from "dotenv"
dotenv.config();

import express from "express"
import { router } from "./routes/user.routes.js";
import mongoose from "mongoose"
import notFound from "./middleware/notfound.js"

const app=express();
const DB_URI=process.env.DB_connect;

app.use(express.static('./public'))
app.use(express.json())

const port=process.env.PORT;

app.use('/api/v1/tasks',router)
app.use(notFound)

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