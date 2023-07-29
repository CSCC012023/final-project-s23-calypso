//ROuting for the dashboard endpoints

const express = require('express');
const dashboard = express.Router();

const dashboardController = require('../../controllers/neo4j/dashboardController');

dashboard.get('/seller/:id', dashboardController.getArtworks);

dashboard.get('/admin', dashboardController.getAdminData);

dashboard.put('/increment/:page', dashboardController.incrementPage);

module.exports = dashboard;