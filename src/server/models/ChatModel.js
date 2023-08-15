const mongoose = require('mongoose');

const ChatModel = mongoose.Schema(
{
    chatName: { type:String, trim:true },
    isGroupChat: {type: Boolean, default: false },
    pic: {type: String, default: "https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png"},
    users: { type: Array, default: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }]},
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
}
    ,{
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", ChatModel);
module.exports = Chat;