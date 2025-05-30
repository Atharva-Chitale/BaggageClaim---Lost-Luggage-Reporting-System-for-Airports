const express = require('express');
const router = express.Router();
const luggageController = require('../controllers/luggageController');
const authMiddleware = require('../middleware/auth');

// Protected routes
router.post('/report', authMiddleware, luggageController.post_report);
router.get('/report', authMiddleware, luggageController.get_report);
router.get('/admin', authMiddleware, luggageController.getAllLuggage);
router.post('/resolve/:id', authMiddleware, luggageController.resolveLuggage);
router.post('/delete/:id', authMiddleware, luggageController.deleteLuggage);
router.get('/userDashboard', authMiddleware, luggageController.getUserLuggage);
router.get('/edit_data/:id',authMiddleware,luggageController.editpage_user);
router.post('/edit_data/:id',authMiddleware,luggageController.update_userdata);
router.post('/delete_data/:id',authMiddleware,luggageController.deletedata);
module.exports = router;
