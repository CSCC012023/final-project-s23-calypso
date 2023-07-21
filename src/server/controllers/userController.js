//The Controller file that defines all the endpoints for the user submission/retrieval

const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const user = require('../models/User');
const JWT_SECRET = "abcflskejflksjflksjflksjfljsofijsoifjwefr49853u405952%@%@LOL"

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         const new_password = hash;
//     });
// });

const userController = {
  retrieveUser: async (req, res) => {
    try {
      // Retrieve all user submissions from the database
      const { email, password } = req.body;

      // If this user exists, find them via email
      const user = await User.findOne({ email })

      if (!user) {
        res.status(403).json({ message: "User Does Not Exist" })
        return
      }

      if (await bcrypt.compare(password, user.password)) {
        // create a token if user login successful
        const id = user._id;
        const token = jwt.sign({ id }, JWT_SECRET, {
          expiresIn: 60 * 60 // expires in 1 hour
        });

        if (res.status(200)) {
          res.cookie('token', token, { httpOnly: true })
          return res.json({ status: "ok", token: token })
        } else {
          return res.status(403).json({ message: "Error Occurred" })
        }
      }
      return res.status(403).json({ message: "Invalid Password" })

    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Encountered a server error!" });
    }
  },

  submitUser: async (req, res) => {
    try {
      //This variable now holds the user's data that the user submitted
      const { firstName, lastName, email, password } = req.body;

      //We need the new users' email to be unique, check with findOne
      const check = await User.findOne({ email })

      if (check) {
        return res.status(403).json({ message: "User Exists!" })
        return
      }

      //Use bcrypt to hash user's password, then store to mongo
      bcrypt.hash(password, saltRounds, function (err, hash) {
        let password = ""
        password = hash
        const newUser = new User({ firstName, lastName, email, password });

        newUser.save();
        return res.status(200).json({ message: "User submitted successfully!", id: newUser._id, email: newUser.email });
        // bcrypt.compare('arielle', hash, function(err, result) {
        //     console.log(result);
        // });
      });
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Encountered a server error!" });
    }
  },

  verifyToken: async (req, res) => {
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, JWT_SECRET, async (err, data) => {
      if (err) {
        return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, id: user._id })
        else return res.json({ status: false })
      }
    })
  }
};

module.exports = userController;