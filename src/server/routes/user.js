const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Endpoint for retrieving all text submissions
router.post('/retrieve', userController.retrieveUser);

//Endpoint for submitting text
router.post('/submit', userController.submitUser);

//Endpoint for retrieving user details
router.post('/collect-user-data', userController.retrieveUserData);


module.exports = router;
