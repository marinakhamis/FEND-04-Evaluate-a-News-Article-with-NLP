const path = require('path')
const webpack = require('webpack')
//Adding a reference to webpackto tell it to use HTML webpack plugin
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const loader = require('sass-loader')

module.exports = {
    //Setting up the starting place (Entry point)
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {   //Getting webpack to use babel.
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                //Set up Sass with Webpack
                //Note: don't use quotes here
                test: /\.scss$/,
                //Note: loaders are read from right to left
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
    ]
}
