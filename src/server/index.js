// //Establish connection to MongoDB Database
// const mongoose = require('mongoose');

const { chats } = require("./data");

// // mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/', {
// mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/TestingDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("DB CONNECTED"))
// .catch((err) => console.log("DB CONNECTION ERROR", err));

//Load environment variables from .env file
require('dotenv').config();

//Connect to MongoDB
const connection = require("./mongodb");
connection();

//Initialize the express server
const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
console.log("App listen at port 8080");
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/texts/', require('./routes/text'));
app.use('/api/users/', require('./routes/user'));
app.use('/api/music/', require('./routes/neo4j/music'));
app.use('/api/v0/users/', require('./routes/neo4j/user'));

app.use('/api/v0/artworks/', require('./routes/neo4j/artwork'));


app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/message', require('./routes/messageRoutes'));

app.use('/api/v0/dashboard/', require('./routes/neo4j/dashboard'));

// app.get("/api/chat", (req, res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     const singleChat = chats.find(c => c._id === req.params.id);
//     res.send(singleChat);
// });

//Define port and start the server
const port = 8080;
const server = app.listen(port, () =>
    console.log('Server is running on port ' + port)
)