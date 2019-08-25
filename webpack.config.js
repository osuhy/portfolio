var webpack = require("webpack")
var path = require("path")
var autoprefixer = require('autoprefixer');
module.exports ={
  entry: "./src/main/js/index.js",
    output: {
      path: __dirname+"/src/main/resources/static/built",
      filename: "./bundle.js",
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                plugins: () => [require('autoprefixer')]
                 }}]
            },
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                plugins: () => [require('autoprefixer')]
                 }}, 'sass-loader']
            }
        ]
    }
}
