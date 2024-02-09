import mongoose, { Schema } from "mongoose"

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    typeOfAnimal:{
        type: String,
        required: true
    },

    color: {
        type:String,
        required: true
    },

    keeper:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }


})

export default mongoose.model('animal', animalSchema)
