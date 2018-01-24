const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.post('/check_user', async (req, res, next) => {
  const user = req.body;
  const errors = await usersController.checkUser(user)
  res.send(errors)
});

module.exports = usersRouter;