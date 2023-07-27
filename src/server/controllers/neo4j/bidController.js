const bidModel = require('../../models/neo4j/Bid');
const dbUtils = require('../../neo4jdb');

const getBidById = async (req, res) => {
    try {
        const bidId = req.params.id;
        const session = dbUtils.getSession(req);
        const bid = await bidModel.getBidById(session, bidId);
        if (!bid) {
        return res.status(404).json({ message: 'Bid not found' });
        }
        res.json(bid);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Encountered server error' });
    }
};

const getBidByProductId = async (req, res) => {
    try {
        const bidId = req.params.id;
        const session = dbUtils.getSession(req);
        const bid = await bidModel.getBidByProductId(session, bidId);
        if (!bid) {
        return res.status(404).json({ message: 'Bid not found based on product id' });
        }
        res.json(bid);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Encountered server error' });
    }
};

const postBid = async (req, res) => {
    try {
      const bid = req.body.bid;
      if (!bid) throw { message: "No bid provided", status: 400 }
      const result = await bidModel.postBid(dbUtils.getSession(req), bid);
      res.json(result);
    }
    catch (err) {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }


const deleteBid = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) throw { message: "No bid id provided", status: 400 }
      const result = await artworkModel.deleteBid(dbUtils.getSession(req), id);
      res.json(result);
    }
    catch (err) {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  }

module.exports = {
    getBidById,
    getBidByProductId,
    postBid,
    deleteBid
}
