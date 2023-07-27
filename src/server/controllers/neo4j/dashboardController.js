//Controller file for Dashboard related queries
const dashboardModel = require('../../models/neo4j/Dashboard');
const dbUtils = require('../../neo4jdb');


const getArtworks = async (req, res) => {
  try {
    const id = req.params.id;

    const session = dbUtils.getSession(req);
    const result = await dashboardModel.getArtworks(session, id);
    res.json(result);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Encountered server error" });
  }
}



module.exports = {
  getArtworks: getArtworks,
}
