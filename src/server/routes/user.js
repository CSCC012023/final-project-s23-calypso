const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Endpoint for retrieving all text submissions
router.get('/retrieve', userController.retrieveUser);

//Endpoint for submitting text
router.post('/submit', userController.submitUser);


module.exports = router;
