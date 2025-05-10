import {Schema, model} from 'mongoose';

const opjectiveSchema = new Schema({
    subject:{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    option:{
        type:[string],
        required: true,
        validate: [optionLimt, 'Option exceeds the limit of 4']
    },
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
},{timestamps:true});

function optionLimt(value){
    if(value.length > 4){
        throw new Error('Option limit exceeded');
    }
    return value;
}

export const Objective = model('Objective', opjectiveSchema);