
const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: [resolve(__dirname, '../src') + '/index.js'],
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'kurtuba-client.min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
}
