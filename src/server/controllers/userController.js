//The Controller file that defines all the endpoints for the user submission/retrieval

const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const JWT_SECRET = "abcflskejflksjflksjflksjfljsofijsoifjwefr49853u405952%@%@LOL"

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         const new_password = hash;
//     });
// });

const userController = {
  retrieveUser: async (req, res) => {
      try{
        // Retrieve all user submissions from the database
        const { email, password } = req.body; 
      
        // If this user exists, find them via email
        const user = await User.findOne({ email })

        if (!user){
          res.status(403).json({ message: "User Does Not Exist"})
          return
        }

        if (await bcrypt.compare(password, user.password)){
          // create a token if user login successful
          const token = jwt.sign({}, JWT_SECRET);

          if (res.status(200)){
            res.json({ status: "ok", data: token})
          } else {
            res.status(403).json({ message: "Error Occurred"})
          }
        }
        res.status(403).json({ message: "Invalid Password"})

      }
      catch (error) {
        console.error(error);
        res.status(500).json({ message: "Encountered a server error!" });
      }
    },

    submitUser: async (req, res) => {
      try {
        //This variable now holds the user's data that the user submitted
        const { firstName, lastName, email, password } = req.body;

        //We need the new users' email to be unique, check with findOne
        const check = await User.findOne({ email })
  
        if (check){
          res.status(403).json({ message: "User Exists!" })
          return
        }

        //Use bcrypt to hash user's password, then store to mongo
        bcrypt.hash(password, saltRounds, function(err, hash){
          let password = ""
          password = hash
          const newUser = new User({ firstName, lastName, email, password });
          
          newUser.save();
          res.status(200).json({ message: "User submitted successfully!" });
          // bcrypt.compare('arielle', hash, function(err, result) {
          //     console.log(result);
          // });
        });
      }
      catch (error) {
        console.error(error);
        res.status(500).json({ message: "Encountered a server error!" });
      }
  }
};

module.exports = userController;