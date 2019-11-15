const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const root = path.resolve(__dirname, '../')

module.exports = {
  mode: 'development',
  entry: {
    js: path.join(root, 'src/index.js')
  },
  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.[id]'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules', root]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 3000,
    contentBase: path.join(root, 'public'),
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      filename: 'index.html',
      template: path.join(root, 'public/index.html'),
      hash: 'bundle.[hash].[id]'
    })
  ]
}
