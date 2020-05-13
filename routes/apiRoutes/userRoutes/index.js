const router = require('express').Router();

const { addTodo, getAllUserEmails } = require('./../../../controllers/userController');

router.route('/todos')
  .post(addTodo);

router.get('/emails', getAllUserEmails);

module.exports = router;