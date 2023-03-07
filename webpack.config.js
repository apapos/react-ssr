const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./client/entry-client.tsx",
    target: "web",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "vendor.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@atom": path.resolve(__dirname, 'atom/'),
            "@client": path.resolve(__dirname, 'client/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
    ],
}