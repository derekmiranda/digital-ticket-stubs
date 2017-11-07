const path = require('path');
const webpack = require('webpack');

const WDS_PORT = 8000;

// load environment vars
const loadedEnv = require('dotenv').load(
  { path: path.join(__dirname, 'config', `.${process.env.NODE_ENV}.env`) }
);

const stringifyObjVals = (obj) => {
  return Object.keys(obj).reduce((accum, key) => {
    accum[key] = JSON.stringify(obj[key]);
    return accum;
  }, {});
}

const processEnv = Object.assign({
  NODE_ENV: process.env.NODE_ENV,
}, loadedEnv.parsed);

const stringifiedProcessEnv = stringifyObjVals(processEnv);

// plugins
const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': stringifiedProcessEnv,
    })
  )
}

module.exports = {
  entry: [
    './client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist',
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './client')],
      },
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
  },
}
