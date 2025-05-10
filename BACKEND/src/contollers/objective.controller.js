import { ApiError } from "../utilits/ApiError.js";
import { ApiResponse } from "../utilits/ApiResopnse.js";
import asyncHandler from "../utilits/asyncHandler.js";
import { Objective } from "../models/objective.model.js";

const createObjective = asyncHandler(async(req,res)=>{
    const {subject,option,question,answer} = req.body;

    if (!subject || !option || !question || !answer){
        throw new ApiError(400,'All fields are required');
    }

    const isExisting = await Objective.find({question});
    
    if(isExisting){
        throw new ApiError(400,'Question is Already exists');
    }

    if(option.length > 4){
        throw new ApiError(400,'Option limit max 4 options is allowed');
    }

    const createdObj = await Objective.create({subject,option,question,answer});

    const cheakObj = await Objective.findById(createdObj._id).populate('subject');
    if(!cheakObj){
        throw new ApiError(400,'Objective not created');
    }else{
        return res.json(new ApiResponse(200,{Objective:cheakObj},'Objective created successfully'));
    }

})

const getAllObjective = asyncHandler(async(req,res)=>{
    const objective = await Objective.find().populate('subject');
    if(!objective){
        throw new ApiError(404,'Objective not found');
    }else{
        return res.json(new ApiResponse(200,{objective},'All objective fetched successfully'));
    }
})

const deleteObjective = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const objective = await Objective.findByIdAndDelete(id);
    if(!objective){
        throw new ApiError(404,'Objective not found');
    }else{
        return res.json(new ApiResponse(200,{objective},'Objective deleted successfully'));
    }
})

const updateObjective = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {subject,option,question,answer} = req.body;
    if (!subject || !option || !question || !answer){
        throw new ApiError(400,'All fields are required');
    }

    const isExisting = await Objective.find({question});

    if(isExisting){
        throw new ApiError(400,'Question is Already exists');
    }

    if(option.length > 4){
        throw new ApiError(400,'Option limit max 4 options is allowed');
    }

    const updateObj = await Objective.findByIdAndUpdate(id,{subject,option,question,answer});

    if(!updateObj){
        throw new ApiError(404,'Objective not found');
    }
    else{
        return res.json(new ApiResponse(200,{updateObj},'Objective updated successfully'));
    }
})

const getObjectBySubject = asyncHandler(async(req,res)=>{
    const subjectId = req.params.subjectId;
    const objective =  await Objective.find({subject:subjectId}).populate('subject');
    if(!objective){
        throw new ApiError(404,'Objective not found');
    }
    else{
        return res.json(new ApiResponse(200,{objective},'Objective fetched successfully'));
    }
})

export {createObjective,getAllObjective,deleteObjective,updateObjective,getObjectBySubject};