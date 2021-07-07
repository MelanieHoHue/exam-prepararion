const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/user_controller');

const router = express.Router();

router
  //.post('/user/new', createData)
  .get('users', readData)
  .put('user/:id/update', updateData)
  .delete('user/:id', deleteData);

module.exports = router;
