const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/auth');

// User routes
router.get('/chat', authMiddleware, chatController.viewChat);
router.post('/chat', authMiddleware, chatController.sendMessage);

// Admin routes
router.get('/adminChat', authMiddleware, chatController.adminViewChats);
router.post('/adminChat/:chatId', authMiddleware, chatController.adminReply);

module.exports = router;
