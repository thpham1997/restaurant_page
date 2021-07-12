const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    entry: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
  },
  plugins:[
    new HtmlWebpackPlugin({
      title : 'Restaurant page'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  
}