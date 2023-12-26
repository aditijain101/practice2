const mongooose = require('mongoose');
const  Schema=mongooose.Schema;
const chatSchema =new Schema({
    userMessage:{
        type:String,
        required:true
    },
    botReply:{
        type:String,
        required:true
    },
   
});

module.exports = mongooose.model("Chat", chatSchema);