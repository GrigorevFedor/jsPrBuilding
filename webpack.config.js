const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
    mode : 'development',
    entry: path.resolve(__dirname, 'public', 'js', 'main.js'),
    output : {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        // new BundleAnalyzerPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(mp3)$/i,
                use: ['file-loader'],
              },
          ]
          
          
    } 
}