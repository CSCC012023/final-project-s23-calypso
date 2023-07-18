const express = require('express');
const user = express.Router();

const userController = require('../../controllers/neo4j/musicController');

user.get('/', userController.findAll);

user.post('/find', userController.findByNameAndArtist);

user.get('/recommended/:id', userController.getRecommendedSongs);

user.post('/name', userController.searchByName);

user.post('/create', userController.createMusic);

user.put('/update', userController.updateMusic);

user.delete('/delete', userController.deleteMusic);

module.exports = user;