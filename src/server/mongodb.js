//Establish connection to MongoDB Database
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/', {
module.exports = () => {
    try{
        mongoose.connect(process.env.USERDB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DB CONNECTED")
    } catch (err){
        console.log("DB CONNECTION ERROR", err)
    }
}
