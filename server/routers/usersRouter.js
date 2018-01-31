const express = require('express');
const usersController = require('../controllers/usersController');
const { createToken } = require('../tokens')
const { formattedJSONResponse } = require('./utils');

const { JWT_SECRET, JWT_EXPIRY } = process.env
const usersRouter = express.Router();

usersRouter.post('/check', async (req, res, next) => {
  const user = req.body;
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
});

usersRouter.post('/create', async (req, res, next) => {
  try {
    const user = req.body;
    const result = await usersController.createUser(user)
    const token = await createToken({
      user: result.data,
      host: req.hostname
    }) 
  
    switch (result.error) {
      case 'database':
        return formattedJSONResponse(res.status(422), result) 
      case 'server':
        throw result
      default:
        return formattedJSONResponse(
          res
            .status(201)
            .set({
              'Location': `${req.protocol}//:${req.hostname}/api/viewings`,
            })
            .cookie('access_token', token),
          result
        )
    }
  } catch (err) {
    throw err
  }
});

module.exports = usersRouter;