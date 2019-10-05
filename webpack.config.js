/**
 * Created by kanamars on 04/10/19.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const classProperties = require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-proposal-class-properties"]
});

const classpro = require('@babel/plugin-proposal-class-properties');
// const pluginProposalClassProperties = require('@babel/plugin-proposal-class-properties');

module.exports={
    entry: './app/index.js',
    output:{
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:"development",
    plugins : [
        new HtmlWebpackPlugin ({
            template : './app/index.html'
        })
    ]
};