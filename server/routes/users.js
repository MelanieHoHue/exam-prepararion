
const express = require('express');

const {
  index,
  showUserForm,
  createData,
  showEditUserFrom,
  updateData,
  redirectView
} = require('../controllers/user_controller');

const router = express.Router();

router
  .get('/', index)
  .get('/new', showUserForm)
  .post('/add', createData)
  .get('/:id/edit', showEditUserFrom)
  .put('/:id/update', updateData, redirectView)

module.exports = router;
