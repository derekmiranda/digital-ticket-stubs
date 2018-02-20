const errorResponse = ({ res, err, statusCode }) => res.status(statusCode).json(err);
const JSONFormat = data => JSON.stringify(data, null, 4);

const formattedJSONResponse = (res, data) => (
  res
    .header('Content-Type', 'application/json')
    .end(JSONFormat(data))
);

const makeJSONResponseMiddleware = (controllerPromiseFn, ...controllerFnArgs) => {
  return (req, res) => (
    controllerPromiseFn(...controllerFnArgs)
      .then(result => formattedJSONResponse(res, result))
      // 422 - mainly for incompatible data but need to account for other errors
      .catch(err => {
        console.error(err);
        errorResponse({ res, err, statusCode: 422 })
      })
  )
}

const setCORS = (req, res, next) => {
  res.header({
    // CORS
    'Access-Control-Allow-Origin': process.env.APP_SERVER_ORIGIN,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Accepts'
  })
  next()
}

module.exports = {
  formattedJSONResponse,
  makeJSONResponseMiddleware,
  setCORS,
}