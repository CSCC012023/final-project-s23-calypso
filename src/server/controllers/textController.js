//NOTE: THIS FILE IS ONLY FOR TESTING.  PLEASE REMOVE BEFORE RELEASE
//The Controller file that defines all the endpoints for the text submission/retrieval

const Text = require('../models/Text');

const textController = {
    retrieveText: async (req, res) => {
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

    submitText: async (req, res) => {
        try {
            //The variable 'text' holds the text that the user submitted
            const { text } = req.body;
            //Create a new text object based on the model from Text.js
            const newText = new Text({ text });
            //Save the text object to the database
            await newText.save();
            res.status(200).json({ message: "Text submitted successfully!" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    }
};

module.exports = textController;
