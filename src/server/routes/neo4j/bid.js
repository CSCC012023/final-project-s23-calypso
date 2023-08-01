//Routing for the bidding endpoints

const express = require('express');
const bid = express.Router();

const bidController = require('../../controllers/neo4j/bidController');

bid.get('/:id', bidController.getBidById);

bid.get('/product/:id', bidController.getBidByProductId);

bid.get('/highest/:id', bidController.getHighestBid);

bid.post('/post', bidController.postBid);

// TODO: Create a function for posting a bid by product id
// bid.post('/post/product/:id', bidControler.postBidByProductId);

bid.delete('/delete/:id', bidController.deleteBid);

module.exports = bid;