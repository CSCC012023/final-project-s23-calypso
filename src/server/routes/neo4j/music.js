const express = require('express');
const user = express.Router();

const userController = require('../../controllers/neo4j/musicController');

user.get('/', userController.findAll);

user.get('/find', userController.findByNameAndArtist);

user.get('/name', userController.searchByName);

user.post('/create', userController.createMusic);

user.put('/update', userController.updateMusic);

user.delete('/delete', userController.deleteMusic);

user.get('/userid/:id', userController.findByUserID);

user.get('/username/:username', userController.findByUsername);

module.exports = user;