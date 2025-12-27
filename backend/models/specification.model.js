import mongoose, { Schema } from "mongoose";

const specificationModel = new Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

export default mongoose.model("Specification", specificationModel)