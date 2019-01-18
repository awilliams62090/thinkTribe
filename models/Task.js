const mongoose= require("mongoose");
const Schema = mongoose.Schema; 

const taskSchema= new Schema({
    task: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        ref: "User",
        type: Schema.Types.ObjectId
    }

});

const Task= mongoose.model("Task", taskSchema);
module.exports= Task;