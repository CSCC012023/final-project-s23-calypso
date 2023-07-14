//ROuting for the artwork endpoints

const express = require('express');
const artwork = express.Router();

const artworkController = require('../../controllers/neo4j/artworkController');

artwork.get('/all', artworkController.getArtworks);


module.exports = artwork;
