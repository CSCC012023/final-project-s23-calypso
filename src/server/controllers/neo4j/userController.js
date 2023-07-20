const userModel = require('../../models/neo4j/user');
const dbUtils = require('../../neo4jdb');

const findAll = async (req, res) => {
  try {
    const result = await userModel.findAll(dbUtils.getSession(req));
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

const findByID = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.findByID(dbUtils.getSession(req), id);
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
    if (!username) throw { message: "Invalid Username", status: 400 };
    const result = await userModel.findByUsername(dbUtils.getSession(req), username);
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

const createUser = async (req, res) => {
  try {
    const id = req.body.user.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.createUser(dbUtils.getSession(req), req.body.user);
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

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.updateUser(dbUtils.getSession(req), id, req.body.user);
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

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw { message: "Invalid ID", status: 400 };
    const result = await userModel.deleteUser(dbUtils.getSession(req), id);
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
  findByID: findByID,
  findByUsername: findByUsername,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}