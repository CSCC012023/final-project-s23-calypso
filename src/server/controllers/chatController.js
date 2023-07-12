const asyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");

// NEED TO ADD USER MODEL
const User = require("../models/User");

// #NOTE: THIS MAY CHANGE DEPENDING ON HOW USER ID IS HANDLED

const chatController = {
    accessChat: async (req, res) => {
        try{
            //Retrieve all text submissions from the database
            const text = await Text.find();   
            res.status(200).json({ text });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
};
// const accessChat = asyncHandler(async (req, res) => {
//   const { userId } = req.body;

//   if (!userId) {
//     console.log("UserId param not sent with request");
//     return res.sendStatus(400);
//   }

//   var isChat = await Chat.find({
//     isGroupChat: false,
//     $and: [
//       { users: { $elemMatch: { $eq: req.user._id } } },
//       { users: { $elemMatch: { $eq: userId } } },
//     ],
//   })
//     .populate("users", "-password")
//     .populate("latestMessage");

//   isChat = await User.populate(isChat, {
//     path: "latestMessage.sender",
//     select: "name pic email",
//   });

//   if (isChat.length > 0) {
//     res.send(isChat[0]);
//   } else {
//     var chatData = {
//       chatName: "sender",
//       isGroupChat: false,
//       users: [req.user._id, userId],
//     };

//     try {
//       const createdChat = await Chat.create(chatData);
//       const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
//         "users",
//         "-password"
//       );
//       res.status(200).json(FullChat);
//     } catch (error) {
//       res.status(400);
//       throw new Error(error.message);
//     }
//   }
// });

// const accessChat = asyncHandler(async(req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         console.log("UserID param not sent with request");
//         return res.sendStatus(400);
//     }
//     var isChat = await Chat.find({
//         isGroupChat: false,
//         $and: [
//             {users:{$elemMatch: {$eq:req.email}}},
//             {users:{$elemMatch: {$eq:email}}},
//         ],
//     })
//         .populate("users", "-password")
//             .populate("latestMessage");
//         isChat = await User.populate(isChat, {
//             path: 'latestMessage.sender',
//             select: "firstName lastName email",
//         });

//     if(isChat.length > 0){
//         res.send(isChat[0]);
//     } else {
//         var chatData = {
//             chatName: "sender",
//             isGroupChat: false,
//             users: [req.user._id, userId],
//         };
            
//         try {
//             const createdChat = await Chat.create(chatData);
//             const FullChat = await Chat.findOne({_id: createdChat._id}).populate(
//                 "users",
//                 "-password"
//             );
//             res.status(200).send(FullChat);
//         } catch (err) {
//             res.status(400);
//             throw new Error(err.message);
//         }
//     } 
// });

module.exports = chatController;