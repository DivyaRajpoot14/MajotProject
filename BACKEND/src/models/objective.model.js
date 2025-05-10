import {Schema, model} from 'mongoose';

const opjectiveSchema = new Schema({
    subject:{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    option:{
        type:[string],
        required: true
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

export const Objective = model('Objective', opjectiveSchema);