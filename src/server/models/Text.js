//NOTE: THIS FILE IS ONLY FOR TESTING.  PLEASE REMOVE BEFORE RELEASE
//The Model file that defines the schema for text submission/retrieval


const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;
