//Controller file for Artwork related queries
const artworkModel = require('../../models/neo4j/Artwork');
const dbUtils = require('../../neo4jdb');


const getArtworks = async (req, res) => {
  try {
    
    //Array of params can be given by req.query
    const params = req.query;
    let sortParameter = '';

    //Check if the key 'sort' exists in the params array
    if (params.hasOwnProperty('sort')) {
      const sort  = params['sort'][0];

      //Check which sort parameter was given
      if (sort === 'featured'){
        sortParameter = 'name DESC';
      }
      else if (sort === 'pricelow'){
        sortParameter = 'price ASC';
      }
      else if (sort === 'pricehigh'){
        sortParameter = 'price DESC';
      }
      else if (sort === 'newest'){
        sortParameter = 'name ASC';
      }
    }

    const session = dbUtils.getSession(req);
    const result = await artworkModel.getArtworks(session, sortParameter);
    res.json(result);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "Encountered server error" });
  }
}


//A test function that receives a request with search parameters and displays the results
const test = async (req, res) => {
  console.log('I was called!');
  const myStr = JSON.stringify(req.query);
  console.log(myStr);
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
    const id = req.params.id;
    const artwork = req.body.artwork;
    console.log(artwork);
    if (!id) throw { message: "No user id provided", status: 400 }
    if (!artwork) throw { message: "No artwork provided", status: 400 }
    const result = await artworkModel.postArtwork(dbUtils.getSession(req), id, artwork);
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

module.exports = {
  getArtworks: getArtworks,
  test: test,
  findByID: findByID,
  findByUserID: findByUserID,
  findByUsername: findByUsername,
  postArtwork: postArtwork,
  deleteArtwork: deleteArtwork,
}