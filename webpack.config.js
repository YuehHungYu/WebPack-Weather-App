const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const path=require('path');

module.exports={
  mode:'development',
  devServer:{
    static:'./'
  },
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.[hash].bundle.js',
    assetModuleFilename: 'imgs/[hash][ext][query]'
  },
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  devtool: 'source-map',
  plugins:[new HtmlWebpackPlugin({
    template:'./basic.html',
    }),
    new MiniCssExtractPlugin({
      filename:'main.[hash].css'
    })
  ],
};