//Routing for the bidding endpoints

const express = require('express');
const bid = express.Router();

const bidController = require('../../controllers/neo4j/bidController');

bid.get('/:id', bidController.getBidById);

bid.get('/product/:id', bidController.getBidByProductId);

// id corresponds to productId of artwork for auction
bid.get('/highest/:id', bidController.getHighestBid);


// Retrieve the BidProduct
bid.get('/bidProduct/:id', bidController.getBidProduct);

bid.post('/post', bidController.postBid);

// TODO: Create a function for posting a BidProduct
bid.post('/post/product/:id', bidController.postBidProduct);

bid.delete('/delete/:id', bidController.deleteBid);

bid.delete('/delete/product/:id', bidController.deleteBidProduct);

module.exports = bid;