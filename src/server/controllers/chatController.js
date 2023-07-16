const asyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");

// NEED TO ADD USER MODEL
const User = require("../models/User");
const { forEach } = require("lodash");

// #NOTE: THIS MAY CHANGE DEPENDING ON HOW USER ID IS HANDLED

const chatController = {
    accessChat: async (req, res) => {
        const { email } = req.body;
        const currentuser = await User.find({email: "message@gmail.com"})
        const otheruser = await User.find({email: email})
        try{
            //Retrieve or create a singular chat between the logged in user and a user they specify
            const chat =await Chat.find({
                isGroupChat: false,
                $and: [
                    // Change this later //
                    { users: currentuser[0]},
                    { users: otheruser[0]},
                ],
            })
        // .populate("users", "-password")
        // .populate("users", "-password")
        // .populate("latestMessage");

        // chat = await User.populate(chat, {
        //     path: "latestMessage.sender",
        //     select: "email firstName lastName",
        // });
        // the chat between the logged in user and the use exists, so return that
            if (chat.length > 0) {
                res.status(200).json({ chat });
        // the chat between the logged in user and the use DNE, so create it
            } else {
                const newChat = new Chat(
                    { 
                        chatName: "New Chat",
                        isGroupChat: false,
                        users: [currentuser[0], otheruser[0]]
                    });
                try {
                    await newChat.save();
                    res.status(200).json({message: "Chat created successfully"});
                } catch(error){
                    console.error(error);
                    res.status(500).json({ message: "Encountered a server error!" });
                }
            }
        // could not find the given users     
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    getUser: async (req, res) => {
        try{
            const { email } = req.body;
            const user = await User.find({email: email})
            res.status(200).json({ user });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    // show all of the logged in user's chats
    // modify to show latest message first
    fetchChats: async (req, res) => {
        try{
            //const { email } = req.body;
            const currentuser = await User.find({email: "message@gmail.com"})
            const chat = await Chat.find({ users: currentuser[0] })
            // .populate("latestMessage")
            // .sort({updatedAt: -1})
            res.status(200).json({ chat });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    // given a group chat name and an array of the emails of users that one wishes to
    // add a group chat is created.
    createGroupChat: async (req, res) => {
        if(!req.body.users || !req.body.name) {
            return res.status(400).send({ message: "Please Fill all the feilds" });
        }
        // add given emails to the user list
        const users = [];
        const currentuser = await User.find({email: "message@gmail.com"});
        users.push(currentuser[0]);
        for (let i = 0; i < req.body.users.length; i++){
            const otheruser = await User.find({email: req.body.users[i]});
            users.push(otheruser[0]);
        }
        // the chat is not a group chat
        if (users.length < 2) {
            return res.status(400).json({ message: "2 or more users are required to form a group chat." });
        }
        // create the group chat
        try{
            const chat =await Chat.find({
                isGroupChat: true,
                chatName: req.body.name
            })
            if (chat.length > 0) {
                res.status(200).json({ chat });
            } else {
                const groupChat = new Chat(
                    {
                        chatName: req.body.name,
                        users: users,
                        isGroupChat: true,
                        groupAdmin: currentuser[0]
                });
                try {
                    await groupChat.save();
                    res.status(200).json({message: "Group Chat created successfully"});
                } catch(error){
                    console.error(error);
                    res.status(500).json({ message: "Group Chat was not able to be created successfully" });
                }
            }
        // was not able to create the group chat :(
        }catch(error){
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    renameGroup: async (req, res) => {
        const { chatId, chatName } = req.body;
        const updatedChat = await Chat.findByIdAndUpdate(chatId,
            { chatName: chatName, }, { new: true, }
        )
        if (!updatedChat) {
            res.status(404).json({ message: "Chat was not found" });
        } else {
            res.status(200).json({message: "Chat Name was sucessfully updated"});
        }
    },
    getGroupChat: async (req, res) => {
        const {chatId} = req.body;
        const chat = await Chat.findById(chatId)
        if (!chat) {
            res.status(404).json({ message: "Chat was not found" });
        } else {
            res.json(chat);
        }
    },
    removeFromGroup: async (req, res) => {
        const { chatId, email } = req.body;
        const currentuser = await User.find({email: email});
        const removed = await Chat.findByIdAndUpdate(chatId, {
            $pull: { users: currentuser[0]}, }
        )
        if (!removed) {
            res.status(404).json({ message: "Chat or User was not found" });
        } else {
            res.json(removed);
        }
    },
    addToGroup: async (req, res) => {
        const { chatId, email } = req.body;
        const currentuser = await User.find({email: email});
        const added = await Chat.findByIdAndUpdate(chatId, {
            $push: { users: currentuser[0]}, }, {new: true}
        )
        if (!added) {
            res.status(404).json({ message: "Chat or User was not found" });
        } else {
            res.json(added);
        }
    },
};

module.exports = chatController;