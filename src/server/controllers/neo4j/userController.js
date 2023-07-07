const userModel = require('../../models/neo4j/user');
const dbUtils = require('../../neo4jdb');

const findAll = async (req, res) => {
  try {
    const result = await userModel.findAll(dbUtils.getSession(req));
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const findByID = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.findByID(dbUtils.getSession(req), id);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const findByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) throw { message: "Invalid Username", status: 400 };
    const result = await userModel.findByUsername(dbUtils.getSession(req), username);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const createUser = async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.createUser(dbUtils.getSession(req), req.body.user);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.updateUser(dbUtils.getSession(req), id, req.body.user);
    console.log(req.body);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.updateUser(dbUtils.getSession(req), id);
    res.json(result);
  }
  catch {
    res.status(500).json({ message: "Encountered server error" });
  }
}

module.exports = {
  findAll: findAll,
  findByID: findByID,
  findByUsername: findByUsername,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}