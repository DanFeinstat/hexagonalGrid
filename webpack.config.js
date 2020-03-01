const path = require('path');
require("regenerator-runtime/runtime");

module.exports = {
    entry: {
        app: path.join(__dirname, '/client/src/index.jsx')
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$|\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, '/client/src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            }
        ]
    }
};