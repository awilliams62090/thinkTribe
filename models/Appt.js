const mongoose= require("mongoose");
const Schema = mongoose.Schema; 

const apptSchema= new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    endTime:{
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String,
        required: true
    },
    userId: {
        ref: "User",
        type: Schema.Types.ObjectId
    }

});

const Appt= mongoose.model("Appt",apptSchema);
module.exports= Appt;