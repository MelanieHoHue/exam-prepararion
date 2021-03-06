
const express = require('express');

const {
  index,
  showUserForm,
  createData,
  showEditUserFrom,
  updateData,
  deleteData,
  redirectView
} = require('../controllers/user_controller');

const router = express.Router();

router
  .get('/', index)
  .get('/new', showUserForm)
  .post('/add', createData)
  .get('/:id/edit', showEditUserFrom)
  .put('/:id/update', updateData, redirectView)
  .delete('/:id/delete', deleteData, redirectView)

module.exports = router;
