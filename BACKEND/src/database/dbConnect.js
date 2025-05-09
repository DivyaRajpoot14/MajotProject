import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}`);
        if(connection){
            console.log("Quiz-App DataBase connected successfully");
        }
    } catch (error) {
        console.log("Error connecting to Quiz-App DataBase",error);
        throw("Error connecting to Quiz-App DataBase",error);
        process.exit(1);
    }
}

export default connectDB;