module.exports = { 
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: [
                        //"@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        //"@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-class-properties"
                    ]
                    }
                }
            },
            {
                test:/\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "img"
                    }
                }   
            }
        ],
    },
};