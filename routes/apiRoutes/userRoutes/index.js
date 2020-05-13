const router = require('express').Router();
const { addTodo, getAllUserEmails } = require('./../../../controllers/userController');

// const { requireAuth } = require('./../../../middleware/authMiddleware');

router.route('/todos')
  .post(addTodo);

router.get('/emails', getAllUserEmails);

module.exports = router;