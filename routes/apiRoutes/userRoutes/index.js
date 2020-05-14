const router = require('express').Router();
const { addTodo, getUserTodos, getAllUserEmails } = require('./../../../controllers/userController');

const { requireAuth } = require('./../../../middleware/authMiddleware');

router.route('/todos')
  .post(requireAuth, addTodo)
  .get(requireAuth, getUserTodos);

router.get('/emails', getAllUserEmails);

module.exports = router;