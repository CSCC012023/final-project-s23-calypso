const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Endpoint for retrieving all text submissions
router.post('/retrieve', userController.retrieveUser);

//Endpoint for submitting text
router.post('/submit', userController.submitUser);

//Endpoint for verifying Token
router.post('/verify', userController.verifyToken)

module.exports = router;
