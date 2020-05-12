const router = require('express').Router();

// const todoRoutes = require('./todoRoutes');
// const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

// router.use('/todo', todoRoutes);
// router.use('/user', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;