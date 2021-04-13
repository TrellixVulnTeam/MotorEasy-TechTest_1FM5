import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tyresSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type:String
    }
})

const brandsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    logo:{
        type: String
        
    }
    
})