const mongoose= require ("mongoose");
const Schema= mongoose.Schema; 


//not sure how we are going to use this to push ans associate with the user. Save for later! 
const chatSchema = new Schema({

})

const Chat= mongoose.model("Chat", chatSchema);

module.exports= Chat;