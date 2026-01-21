import dotenv from "dotenv"
dotenv.config();

import express from "express"
import { router } from "./routes/user.routes.js";

const app=express();

app.use(express.json())

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.use('/api/v1/users',router)

app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
    
});