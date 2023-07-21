//Controller file for Artwork related queries
const artworkModel = require('../../models/neo4j/Artwork');
const dbUtils = require('../../neo4jdb');


const getArtworks = async (req, res) => {
  try {
    const params = req.query;
    let sortParameter = '';
    let filters = [];

    // Check if the key 'sort' exists in the params array
    if (params.hasOwnProperty('sort')) {
      const sort  = params['sort'][0];

      // Check which sort parameter was given
      if (sort === 'featured'){
        sortParameter = 'name ASC';
      }
      else if (sort === 'pricelow'){
        sortParameter = 'price ASC';
      }
      else if (sort === 'pricehigh'){
        sortParameter = 'price DESC';
      }
      else if (sort === 'newest'){
        sortParameter = 'date DESC';
      }
    }

    // Check if the key 'filter' exists in the params array
    if (params.hasOwnProperty('filter')) {
      filters = params['filter'];
    }

    const session = dbUtils.getSession(req);
    const result = await artworkModel.getArtworks(session, sortParameter, filters);
    res.json(result);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Encountered server error" });
  }
}

const getRecommendedArtworks = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid Username", status: 400 };
    const result = await artworkModel.getRecommendedArtworks(dbUtils.getSession(req), id);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

module.exports = {
  getArtworks: getArtworks,
  getRecommendedArtworks: getRecommendedArtworks
}