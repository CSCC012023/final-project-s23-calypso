const express = require('express');
const music = express.Router();

const musicController = require('../../controllers/neo4j/musicController');

music.get('/', musicController.findAll);

music.get('/find/:artist/:song', musicController.findByNameAndArtist);

music.get('/recommended/:id', musicController.getRecommendedSongs);

music.post('/name', musicController.searchByName);

music.post('/post', musicController.createMusic);

music.put('/update/:name/:artist', musicController.updateMusic);

music.delete('/delete/:name/:artist', musicController.deleteMusic);

music.get('/find/:name/:artist', musicController.findSongByNameAndArtist);

music.get('/userid/:id', musicController.findByUserID);

music.get('/category/:category', musicController.getByCategory);

music.get('/username/:username', musicController.findByUsername);

music.put('/increment/:artist/:song', musicController.incrementVisits);

module.exports = music;