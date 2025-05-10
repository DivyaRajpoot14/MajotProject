import {Subject} from '../models/subject.model.js';
import asyncHandler from '../utilits/asyncHandler.js';
import {ApiError} from '../utilits/ApiError.js';
import {ApiResopnse} from '../utilits/ApiResopnse.js';
import exp from 'constants';

const createSubject = asyncHandler(async (req, res) => {
    const {name} = req.body;
    const isExisting = Subject.find({name});

    if(isExisting) {
        throw new ApiError(400, 'Subject already exists');
    }

    const CreateSub = await Subject.create({name});

    const cheakSub = await Subject.findById(CreateSub._id);
    if(!cheakSub) {
        throw new ApiError(400, 'Subject not created');
    }else{
        res.json(new ApiResopnse(200,{Subject: cheakSub}, 'Subject created successfully'));
    }

});

const getAllSubject = asyncHandler(async(req,res)=>{
    const subjects = await Subject.find();
    if(!subjects){
        throw new ApiError(404,"Subject not found");
    }
    else{
        res.json(new ApiResopnse(200,{subjects},'All subjects fetched successfully'));
    }
})

const deleteSubject = asyncHandler( async(req,res)=>{
    const id = req.params.id;
    const subject = await Subject.findByIdAndDelete(id);
    if(!subject){
        throw new ApiError(404,"Subject not found");
    }
    else{
        res.json(new ApiResopnse(200,{subject},'Subject deleted successfully'));
    }
})

const updateSubject = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const {name}= req.body;
    const updateSub = await Subject.findByIdAndUpdate(id,{name});
    if(!updateSub){
        throw new ApiError(404,"Subject not found");
    }
    else{
        res.json(new ApiResopnse(200,{updateSub},'Subject updated successfully'));
    }
})

export {createSubject,getAllSubject,deleteSubject,updateSubject};