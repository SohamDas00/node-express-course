import dotenv from "dotenv"
dotenv.config();

import express from "express"
const app=express();

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
    
});