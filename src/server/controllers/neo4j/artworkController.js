//Controller file for Artwork related queries
const artworkModel = require('../../models/neo4j/Artwork');
const dbUtils = require('../../neo4jdb');

const getArtworkById = async (req, res) => {
  try {
    const artworkId = req.params.id;
    const session = dbUtils.getSession(req);
    const artwork = await artworkModel.getArtworkById(session, artworkId);

    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }

    res.json(artwork);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Encountered server error' });
  }
};

const getArtworks = async (req, res) => {
  try {
    const params = req.query;
    let sortParameter = '';
    let filters = [];
    // Check if the key 'sort' exists in the params array
    if (params.hasOwnProperty('sort')) {
      const sort  = params['sort'];

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
      else if (sort === 'visits'){
        sortParameter = 'visits DESC';
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

const getHomepageArtworks = async (req, res) => {
  try {
    const type = req.params.type;
    let typeParameter = '';

    if (type === 'featured') {
      typeParameter = 'name ASC';
    }
    else if (type === 'pricelow') {
      typeParameter = 'price ASC';
    }
    else if (type === 'newest') {
      typeParameter = 'date DESC';
    }

    const session = dbUtils.getSession(req);
    const result = await artworkModel.getHomepageArtworks(session, typeParameter);
    res.json(result);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Encountered server error" });
  }
}

const findByID = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "No artwork id provided", status: 400 }
    const result = await artworkModel.findByID(dbUtils.getSession(req), id);
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

const findByUserID = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "No user id provided", status: 400 }
    const result = await artworkModel.findByUserID(dbUtils.getSession(req), id);
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

const findByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) throw { message: "No username provided", status: 400 }
    const result = await artworkModel.findByUsername(dbUtils.getSession(req), username);
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

const postArtwork = async (req, res) => {
  try {
    const artwork = req.body.artwork;
    if (!artwork) throw { message: "No artwork provided", status: 400 }
    const result = await artworkModel.postArtwork(dbUtils.getSession(req), artwork);
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

const updateArtwork = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "No artwork id provided", status: 400 }
    const artwork = req.body.artwork;
    if (!artwork) throw { message: "No artwork provided", status: 400 }
    const result = await artworkModel.updateArtwork(dbUtils.getSession(req), id, artwork);
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

const deleteArtwork = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "No artwork id provided", status: 400 }
    const result = await artworkModel.deleteArtwork(dbUtils.getSession(req), id);
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

const getByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    if (!category) throw { message: "No category provided", status: 400 }
    const result = await artworkModel.getByCategory(dbUtils.getSession(req), category);
    res.json(result);
  }
  catch (err) {
    if (err.status) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
 }}

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

const incrementVisits = async (req, res) => {
  try {
      const id = req.params.id;
      const session = dbUtils.getSession(req);
      const result = await artworkModel.incrementVisits(session, id);
      res.json(result);
  }
  catch (error) {
      console.log(error);
      res.status(500).json({ message: "Encountered server error" });
  }
}


module.exports = {
  getArtworks: getArtworks,
  getArtworkById:getArtworkById,
  findByID: findByID,
  findByUserID: findByUserID,
  findByUsername: findByUsername,
  postArtwork: postArtwork,
  updateArtwork: updateArtwork,
  deleteArtwork: deleteArtwork,
  getByCategory: getByCategory,
  getRecommendedArtworks: getRecommendedArtworks,
  incrementVisits: incrementVisits,
  getHomepageArtworks: getHomepageArtworks,
}
