import { model,Schema } from "mongoose";
import { type } from "os";

const subjectSchema = new Schema({
    name:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const Subject = model("Subject",subjectSchema);