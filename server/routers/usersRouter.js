const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.post('/check_user', (req, res, next) => {
  const user = req.body;
  usersController.checkUser(user)
});

module.exports = usersRouter;