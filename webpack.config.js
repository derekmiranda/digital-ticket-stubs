const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

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
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context.includes('node_modules')
  }),
  new webpack.DefinePlugin({
    'process.env': stringifiedProcessEnv,
  })
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
} else if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new MinifyPlugin()
  )
}

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
