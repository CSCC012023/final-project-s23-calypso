const express = require('express');
const user = express.Router();

const userController = require('../../controllers/neo4j/userController');

user.get('/', userController.findAll);

user.get('/:id', userController.findByID);

user.get('/user/:username', userController.findByUsername);

user.post('/register', userController.createUser);

user.put('/:id', userController.updateUser);

user.delete('/:id', userController.deleteUser);

module.exports = user;