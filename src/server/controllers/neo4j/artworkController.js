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


module.exports = {getArtworks: getArtworks, test: test}