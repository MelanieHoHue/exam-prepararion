'use strict';

const User = require('../models/user_schema');
const passport = require('passport');

const createData = (req, res) => {
  let userParams = {
    name: req.body.name,
    age: req.body.age
  };
  User.create(userParams)
    .then((data) => {
      console.log('New User Created!', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.log(req.body);
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const readData = (req, res) => {
  User.find()
    .then((data) => {
      console.log("data from api/users:", data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateData = (req, res, next) => {
  console.log('updateData!!!');
  User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log('User updated!');
      //res.status(201).json(data);
      res.locals.redirect = "/users";
      next();
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res, next) => {
  console.log('deleteData!');
 
  User.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error('User not available');
      }
      return data.remove();
    })
    .then((data) => {
      console.log('User ', data, ' removed!');
      //res.status(200).json(data);
      res.locals.redirect = "/users";
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const index = (req, res, next) => {
  User.find()
      .sort({ 'name.last': 'asc' })
      .then(users => {
        res.locals.users = users
        res.render('users/index')
      })
      .catch(error => {
        console.log(`Error fetching users: ${error.message}`)
        next(error)
      })
};

const showUserForm = (req, res, next) => {
  res.render('users/new');
};

const showEditUserFrom = (req, res) => {
  let userId = req.params.id;
  console.log("userId:", userId);
  //Use findById to locate a user in the database by their ID.
  User.findById(userId)
    .then(user => {
        //Render the user edit page for a specific user in the database.
        res.render("users/edit", { user: user });
    })
    .catch(error => {
        console.log(`Error fetching user by ID: ${error.message}`);
        next(error);
    });
};

const redirectView = (req, res, next) => {
  let redirectPath = res.locals.redirect;
  if (redirectPath) res.redirect(redirectPath);
  else next();
};

const loginUser = (req, res) => {
  res.render('users/login');
};

const authenticateUser = (req, res) => {
  res.render('users/login');
};

const logoutUser = (req, res) => {
  res.render('users/login');
};


module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
  index,
  showUserForm,
  showEditUserFrom,
  redirectView,
  loginUser,
  authenticateUser,
  logoutUser
};
