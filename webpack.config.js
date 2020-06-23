const path = require("path") 
const webpack = require('webpack')
//Adding a reference to webpackto tell it to use HTML webpack plugin
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    //Setting up the starting place (Entry point)
    entry: './src/client/index.js',
    module: {
        //Getting webpack to use babel.
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                }
        ]
    },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            })
        ]
}