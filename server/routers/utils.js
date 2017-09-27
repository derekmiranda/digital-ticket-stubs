const errorResponse = ({ res, err, statusCode }) => res.status(statusCode).json(err);
const JSONFormat = data => JSON.stringify(data, null, 4);

const formattedJSONResponse = (res, data) => (
  res
    .header('Content-Type', 'application/json')
    .end(JSONFormat(data))
);

module.exports = {
  formattedJSONResponse,
  makeJSONResponseMiddleware: (controllerPromiseFn, ...controllerFnArgs) => {
    return (req, res) => (
      controllerPromiseFn(...controllerFnArgs)
        .then(result => formattedJSONResponse(res, result))
        // 422 - mainly for incompatible data but need to account for other errors
        .catch(err => errorResponse({ res, err, statusCode: 422 }))
    )
  }
}