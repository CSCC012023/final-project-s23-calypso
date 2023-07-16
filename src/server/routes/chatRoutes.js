const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
//const { protect } = require("../middleware/authMiddleware");

// have to add protection into it with user authentication

router.post('/', chatController.accessChat);
router.get('/', chatController.fetchChats);
router.post('/group', chatController.createGroupChat);
router.get('/group', chatController.getGroupChat);
router.put('/group', chatController.renameGroup);
router.put('/groupremove', chatController.removeFromGroup);
router.put('/groupadd', chatController.addToGroup);
// router.route('/message/groupremove').put(removeFromGroup);
// router.route('/message/groupadd').put(addToGroup);

module.exports = router;