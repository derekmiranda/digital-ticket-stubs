const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.post('/check', async (req, res, next) => {
  const user = req.body;
  const errors = await usersController.checkUser(user)
  res.status(422).send(errors)
});

usersRouter.post('/create', async (req, res, next) => {
  const user = req.body;
  const result = await usersController.createUser(user)

  switch (result.error) {
    case 'database':
      return res.status(422).send(result) 
    case 'server':
      throw result
    default:
      res
        .status(201)
        .set({
          'Location': `${req.protocol}//:${req.hostname}/api/viewings`
        })
        .send(result)
  }
});

module.exports = usersRouter;