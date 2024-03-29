const express = require('express');
const user = express.Router();

const userController = require('../../controllers/neo4j/userController');

user.get('/', userController.findAll);

user.get('/:id', userController.findByID);

user.get('/user/:username', userController.findByUsername);

user.get('/partName/:name', userController.findByPartName);

user.post('/register', userController.createUser);

user.put('/:id', userController.updateUser);

user.delete('/:id', userController.deleteUser);

user.put('/increment/:id', userController.incrementVisits);

module.exports = user;