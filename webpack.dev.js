const path = require("path");  
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, { 
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",  
                    "css-loader",
                    "sass-loader" 
                ], 
            },
        ]
    }
});