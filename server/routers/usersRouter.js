const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.post('/check', async (req, res, next) => {
  const user = req.body;
  const errors = await usersController.checkUser(user)
  res.send(errors)
});

usersRouter.post('/create', async (req, res, next) => {
  const user = req.body;
  const result = await usersController.createUser(user)
  res.status(201).send(result)
});

module.exports = usersRouter;