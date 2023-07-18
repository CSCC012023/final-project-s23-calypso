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
    const music = req.params.music;
    if (!music) throw { message: "Invalid body", status: 400 };
    const result = await musicModel.createMusic(dbUtils.getSession(req), music);
    console.log(req.body);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
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
    const music = req.params.music;
    if (!music) throw { message: "Invalid ID", status: 400 };
    const result = await musicModel.deleteMusic(dbUtils.getSession(req), music);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
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
  deleteMusic: deleteMusic
}