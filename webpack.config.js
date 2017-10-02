const path = require('path');
const webpack = require('webpack');

const WDS_PORT = 8000;

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
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
        include: [ path.resolve(__dirname, './client') ],
      },
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
  },
}
