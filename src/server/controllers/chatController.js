const asyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");
const User = require("../models/User");
const UserProfile = require("../models/neo4j/user");

// Header: POST {URL}/
// Params:
//      email: string
// Function: If a chat exists between the user and the sent user, then it returns that
// else, it creates a new chat between them.
const chatController = {
    accessChat: async (req, res) => {
        const { email, id, pic } = req.body;
        const currentuser = await User.findById(id)
        const otheruser = await User.find({email: email})
        try{
            //Retrieve or create a singular chat between the logged in user and a user they specify
            const chat =await Chat.find({
                pic: pic,
                isGroupChat: false,
                $and: [
                    // Change this later //
                    { users: currentuser},
                    { users: otheruser[0]},
                ],
            })
            // other user is null
            if (!otheruser[0]) {
                res.status(404).json({message: "User not found!"});
            }

        // the chat between the logged in user and the use exists, so return that
            if (chat.length > 0) {
                res.status(200).json({ chat });
        // the chat between the logged in user and the use DNE, so create it
            } else {
                const newChat = new Chat(
                    { 
                        chatName: otheruser[0].firstName,
                        pic: pic,
                        isGroupChat: false,
                        users: [currentuser, otheruser[0]]
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
    // Header: GET {URL}/user
    // Params:
    //      email: String
    // Function: get a user by a specific email
    getUser: async (req, res) => {
        const user = await User.findById(req.params.user);
        try {
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // Header: GET {URL}/users
    // Params:
    // Function: get all users
    getUsers: async (req, res) => {
        try{
            //Retrieve all users from the database
            const users = await User.find();
            res.status(200).json({ users });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    // getUser: async (req, res) => {
    //     try{
    //         const { email } = req.body;
    //         const user = await User.find({email: email})
    //         res.status(200).json({ user });
    //     }
    //     catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: "Encountered a server error!" });
    //     }
    // },
    // Header: GET {URL}/chat
    // Params: current user id
    // Function: Gets all chats that the logged in user is in
    fetchChats: async (req, res) => {
        try{
            const currentuser = await User.findById(req.params.user)
            const chat = await Chat.find({ users: currentuser })
            // .populate("latestMessage")
            // .sort({updatedAt: -1})
            res.status(200).json({ chat });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },
    // Header: POST {URL}/group
    // Params: 
    //      users: array of strings
    //      name: string
    // Function: given a group chat name and an array of the emails of users that one 
    // wishes to add a group chat is created.
    // only works if the group chat doesn't already exist
    createGroupChat: async (req, res) => {
        if(!req.body.users || !req.body.name) {
            return res.status(400).send({ message: "Please Fill all the feilds" });
        }
        // add given emails to the user list
        const users = [];
        const currentuser = await User.find(req.body.id);
        users.push(currentuser);
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
            // if group chat already exists, return that
            if (chat.length > 0) {
                res.status(200).json({ chat });
            } else {
                const groupChat = new Chat(
                    {
                        chatName: req.body.name,
                        users: users,
                        isGroupChat: true,
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
    // Header: PUT {URL}/group
    // Params:
    //      chatId: string
    //      chatName: string
    // Function: given a chatId, rename that chat to chatName.
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
    // Header: PUT {URL}/groupremove
    // Params:
    //      chatId: string
    //      email: string
    // Function: given a chatId, if the chat exists and the email exists in the chat
    // then remove the user from the chat.
    removeFromGroup: async (req, res) => {
        const { chatId, email } = req.body;
        const currentuser = await User.find({email: email});
        const removed = await Chat.findByIdAndUpdate(chatId, {
            $pull: { users: currentuser}, }
        )
        if (!removed) {
            res.status(404).json({ message: "Chat or User was not found" });
        } else {
            res.json(removed);
        }
    },
    // Header: PUT {URL}/groupadd
    // Params:
    //      chatId: string
    //      email: string
    // Function: given a chatId, if the chat exists and the email DNE in the chat
    // then add the user to the chat.
    addToGroup: async (req, res) => {
        const { chatId, email } = req.body;
        const currentuser = await User.find({email: email});
        const added = await Chat.findByIdAndUpdate(chatId, {
            $push: { users: currentuser}, }, {new: true}
        )
        if (!added) {
            res.status(404).json({ message: "Chat or User was not found" });
        } else {
            res.json(added);
        }
    },
};

module.exports = chatController;