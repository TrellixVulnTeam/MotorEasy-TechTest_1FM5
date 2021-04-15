import mongoose from 'mongoose';


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
        type: Array,
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



export const Tyre = mongoose.model('Tyre', tyresSchema)


