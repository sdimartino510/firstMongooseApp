const router = require('express').Router();

const { addTodo } = require('./../../../controllers/userController');

router.route('/todos')
  .post(addTodo);

module.exports = router;