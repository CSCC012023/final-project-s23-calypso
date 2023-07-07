//NOTE: THIS FILE IS ONLY FOR TESTING.  PLEASE REMOVE BEFORE RELEASE
//The Routing File for endpoints related to Text Submission/Retrieval

const express = require('express');
const router = express.Router();
const artworkController = require('../controllers/artworkController');

//Endpoint for retrieving all text submissions
router.post('/test', artworkController.testCreate);


module.exports = router;
