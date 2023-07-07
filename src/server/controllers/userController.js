//The Controller file that defines all the endpoints for the user submission/retrieval

const User = require('../models/User');

const userController = {
    retrieveUser: async (req, res) => {
        try{
            //Retrieve all user submissions from the database
            const { email, password } = await User.find();   
            res.status(200).json({ email, password });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    },

    submitUser: async (req, res) => {
        try {
            //The variable 'user' holds the user that the user submitted
            const { firstName, lastName, email, password } = req.body;
            //Create a new user object based on the model from User.js
            const newUser = new User({ firstName, lastName, email, password });
            //Save the user object to the database
            await newUser.save();
            res.status(200).json({ message: "User submitted successfully!" });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Encountered a server error!" });
        }
    }
};

module.exports = userController;