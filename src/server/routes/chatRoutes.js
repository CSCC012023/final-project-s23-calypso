const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
//const { protect } = require("../middleware/authMiddleware");

// have to add protection into it with user authentication

router.post('/', chatController.accessChat);
//router.route('/message').post(protect, accessChat);
// router.route('/message').get(fetchChats);
// router.route('/message/group').post(createGroupChat);
// router.route('/message/rename').put(renameGroup);
// router.route('/message/groupremove').put(removeFromGroup);
// router.route('/message/groupadd').put(addToGroup);

module.exports = router;