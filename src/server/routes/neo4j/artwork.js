//ROuting for the artwork endpoints

const express = require('express');
const artwork = express.Router();

const artworkController = require('../../controllers/neo4j/artworkController');

artwork.get('/all', artworkController.getArtworks);
//artwork.get('/:id',artworkController.getArtworkById);
artwork.get('/recommended/:id', artworkController.getRecommendedArtworks);

artwork.get('/id/:id', artworkController.findByID);

artwork.get('/userid/:id', artworkController.findByUserID);

artwork.get('/username/:username', artworkController.findByUsername);

artwork.get('/category/:category', artworkController.getByCategory);

artwork.post('/post', artworkController.postArtwork);

artwork.put('/update/:id', artworkController.updateArtwork);

artwork.delete('/delete/:id', artworkController.deleteArtwork);

artwork.put('/increment/:id', artworkController.incrementVisits);

module.exports = artwork;
