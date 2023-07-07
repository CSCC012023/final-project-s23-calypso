//ROuting for the artwork endpoints

const express = require('express');
const router = express.Router();
const artworkController = require('../../controllers/neo4j/artworkController');

//Endpoint for retrieving all text submissions
router.post('/test', artworkController.testCreate);


module.exports = router;
