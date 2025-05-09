import dotenv from 'dotenv';
import connectDB from './database/dbConnect.js';
import { app } from "./app.js"

dotenv.config({
    path:'./env'
})

const Port = process.env.PORT||5000;

connectDB().then(()=>{
    app.listen(Port,()=>{
        console.log(`Server is running on port ${Port}`);
    });
}).catch((error)=>{
    console.log(error); 
})
