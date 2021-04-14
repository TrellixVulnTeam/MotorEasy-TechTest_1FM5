import mongoose from "mongoose";

const Schema = mongoose.Schema;

const brandsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    logo:{
        type: String
        
    }
    
})

export const Brand = mongoose.model('Brand', brandsSchema)
