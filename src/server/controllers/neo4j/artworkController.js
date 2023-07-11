//Controller file for Artwork related queries
const artworkModel = require('../../models/neo4j/Artwork');
const dbUtils = require('../../neo4jdb');


const findAll = async (req, res) => {
  try {
    const result = await artworkModel.findAll(dbUtils.getSession(req));
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}


module.exports = {findAll: findAll,}