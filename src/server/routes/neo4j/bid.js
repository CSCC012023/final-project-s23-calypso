//ROuting for the bidding endpoints

const express = require('express');
const bid = express.Router();

const bidController = require('../../controllers/neo4j/bidController');

bid.get('/:id', bidController.getBidById);

bid.get('/product/:id', bidController.getBidByProductId);

bid.post('/post', bidController.postBid);

bid.delete('/delete/:id', bidController.deleteBid);

module.exports = bid;