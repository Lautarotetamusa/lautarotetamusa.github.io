const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: [
        "./src/main.ts",
    ],
    output: {
        path: path.resolve(__dirname, './front'),
        filename: "game-bundle.js", // <--- Will be compiled to this single file
        library: "GameLibrary"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    /*
    optimization: {
        //minimize: true, // Habilitar minimización
        minimizer: [new TerserWebpackPlugin()], // Usar TerserWebpackPlugin
    },*/
};
