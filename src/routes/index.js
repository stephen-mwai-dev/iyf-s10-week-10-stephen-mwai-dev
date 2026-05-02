const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts');
const usersRoutes = require('./users');

// Mount routes
router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// 👇 ADD THIS TEST ROUTE
router.get('/test', (req, res) => {
    res.json({ message: 'Test route is working! 🎉' });
});

module.exports = router;