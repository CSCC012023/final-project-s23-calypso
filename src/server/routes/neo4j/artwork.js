//ROuting for the artwork endpoints

const express = require('express');
const artwork = express.Router();

const artworkController = require('../../controllers/neo4j/artworkController');

artwork.get('/all', artworkController.getArtworks);

artwork.get('/recommended/:id', artworkController.getRecommendedArtworks);



module.exports = artwork;
