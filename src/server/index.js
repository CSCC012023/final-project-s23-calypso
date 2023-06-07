//Establish connection to MongoDB Database
const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/', {
mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/TestingDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTION ERROR", err));


//Initialize the express server
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 8080");
app.use(express.json());
app.use(cors());
app.use('/api/texts/', require('./routes/text'));


//Define port and start the server
const port = 8080;
const server = app.listen(port, () =>
    console.log('Server is running on port ' + port)
)