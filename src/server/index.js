const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://calypso_cscc01:Summer2023!@cluster0.nxm9mq7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTION ERROR", err));

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 8080");
app.use(express.json());
app.use(cors());

const port = 8080;

const server = app.listen(port, () =>
    console.log('Server is running on port ${port}')
)