const musicModel = require('../../models/neo4j/music');
const dbUtils = require('../../neo4jdb');

const findAll = async (req, res) => {
  try {
    const result = await musicModel.findAll(dbUtils.getSession(req));
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const findByNameAndArtist = async (req, res) => {
  try {
    const props = req.body.props;
    if (!props) throw { message: "Invalid ID", status: 400 };
    const result = await musicModel.findByNameAndArtist(dbUtils.getSession(req), props);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const getSongsByArtist = async (req, res) => {
  try {
    const artist = req.params.artist;
    if (!artist) throw { message: "Invalid Username", status: 400 };
    const result = await musicModel.getSongsByArtist(dbUtils.getSession(req), artist);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const getRecommendedSongs = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid Username", status: 400 };
    const result = await musicModel.getRecommendedSongs(dbUtils.getSession(req), id);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const searchByName = async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) throw { message: "Invalid name", status: 400 };
    const result = await musicModel.searchByName(dbUtils.getSession(req), name);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const createMusic = async (req, res) => {
  try {
    const id = req.params.id;
    const music = req.body.music;
    if (!id) throw { message: "No user id provided", status: 400 };
    if (!music) throw { message: "No music provided in body", status: 400 };
    const result = await musicModel.createMusic(dbUtils.getSession(req), music, id);
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

const updateMusic = async (req, res) => {
  try {
    const music = req.params.music;
    if (!music) throw { message: "Invalid ID", status: 400 };
    const result = await musicModel.updateMusic(dbUtils.getSession(req), music);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const deleteMusic = async (req, res) => {
  try {
    const name = req.params.name;
    const artist = req.params.artist;
    if (!name) throw { message: "No music name provided", status: 400 };
    if (!artist) throw { message: "No artist provided", status: 400 };
    const result = await musicModel.deleteMusic(dbUtils.getSession(req), name, artist);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const findByUserID = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "No user id provided", status: 400 };
    const result = await musicModel.findByUserID(dbUtils.getSession(req), id);
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
    if (!username) throw { message: "No username provided", status: 400 };
    const result = await musicModel.findByUsername(dbUtils.getSession(req), username);
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
  findAll: findAll,
  findByNameAndArtist: findByNameAndArtist,
  getSongsByArtist: getSongsByArtist,
  getRecommendedSongs: getRecommendedSongs,
  searchByName: searchByName,
  createMusic: createMusic,
  updateMusic: updateMusic,
  deleteMusic: deleteMusic,
  findByUserID: findByUserID,
  findByUsername: findByUsername
}