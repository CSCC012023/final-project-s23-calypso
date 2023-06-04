//NOTE: THIS FILE IS ONLY FOR TESTING.  PLEASE REMOVE BEFORE RELEASE
//The Routing File for endpoints related to Text Submission/Retrieval

const express = require('express');
const router = express.Router();
const textController = require('../controllers/textController');

//Endpoint for retrieving all text submissions
router.get('/retrieve', textController.retrieveText);

//Endpoint for submitting text
router.post('/submit', textController.submitText);


module.exports = router;
