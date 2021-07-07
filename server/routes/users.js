
const express = require('express');

const {
  index,
  showUserForm,
  createData
} = require('../controllers/user_controller');

const router = express.Router();

router
  .get('/', index)
  .get('/new', showUserForm)
  .post('/add', createData)

module.exports = router;
