const express = require('express');
const usersController = require('../controllers/usersController');
const { formattedJSONResponse } = require('./utils');

const usersRouter = express.Router();

usersRouter.post('/check', async (req, res, next) => {
  const user = req.body;
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
});

usersRouter.post('/create', async (req, res, next) => {
  const user = req.body;
  const result = await usersController.createUser(user)

  switch (result.error) {
    case 'database':
      return formattedJSONResponse(res.status(422), result) 
    case 'server':
      throw result
    default:
      formattedJSONResponse(
        res
          .status(201)
          .set({
            'Location': `${req.protocol}//:${req.hostname}/api/viewings`
          }),
        result
      )
        // TODO: send token
  }
});

module.exports = usersRouter;