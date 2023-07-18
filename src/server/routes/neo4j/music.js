const express = require('express');
const user = express.Router();

const userController = require('../../controllers/neo4j/musicController');

user.get('/', userController.findAll);

user.post('/find', userController.findByNameAndArtist);

user.get('/recommended/:id', userController.getRecommendedSongs);

user.post('/name', userController.searchByName);

user.post('/create/userid/:id', userController.createMusic);

user.put('/update', userController.updateMusic);

user.delete('/delete/:name/:artist', userController.deleteMusic);

user.get('/find/:name/:artist', userController.findSongByNameAndArtist);

user.get('/userid/:id', userController.findByUserID);

user.get('/username/:username', userController.findByUsername);

module.exports = user;