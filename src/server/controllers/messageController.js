const asyncHandler = require("express-async-handler");
const Message = require("../models/MessageModel");
const Chat = require("../models/ChatModel");

const messageController = {
    createMessage: async (req, res) => {
        const newMessage = new Message(req.body);
        try {
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getMessage: async (req, res) => {
        
        //const {chatId} = req.body;
        
        try {
            // const chat = await Chat.findById(chatId)
            const messages = await Message.find({ chat: req.params.chatId });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = messageController;