//ROuting for the artwork endpoints

const express = require('express');
const artwork = express.Router();

const artworkController = require('../../controllers/neo4j/artworkController');

artwork.get('/all', artworkController.getArtworks);

artwork.get('/id/:id', artworkController.findByID);

artwork.get('/userid/:id', artworkController.findByUserID);

artwork.get('/username/:username', artworkController.findByUsername);

artwork.post('/post/userid/:id', artworkController.postArtwork);

artwork.delete('/delete/:id', artworkController.deleteArtwork);

module.exports = artwork;
