//ROuting for the artwork endpoints

const express = require('express');
const artwork = express.Router();

const artworkController = require('../../controllers/neo4j/artworkController');

artwork.get('/all', artworkController.findAll);


module.exports = artwork;
