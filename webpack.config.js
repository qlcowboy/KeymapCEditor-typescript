var path = require("path");
var packageJson = require(path.join(__dirname, 'package.json'));
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var appDir = path.resolve(__dirname, "src");
var config = {
    entry: {
        vendors : Object.keys(packageJson.dependencies),
        app: [
            path.join(__dirname, 'src', 'Index.tsx')
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less', '.css']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: ""
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['ts-loader'], include: appDir },
            { test: /\.css$/, exclude: /\.module\.css$/, loader: ExtractTextPlugin.extract(["css-loader"]), include: appDir },
            { test: /\.scss$/, exclude: /\.module\.scss$/, loader: ExtractTextPlugin.extract(["css-loader", "postcss-loader", "sass-loader"]), include: appDir },
            { test: /\.module\.scss$/, loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader", include: appDir },
            { test: /\.svg$/, loader: 'svg-inline-loader' },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff',
                },
            },{
                test: /\.(ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                },
            },
            { test: /\.(jpg|png|gif)$/, loader: "file-loader?name=[name].[ext]", include: appDir }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            excludeChunks: ["o2c"]
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: `vendors.js` }),
        new ExtractTextPlugin({
            filename: '[name].css', 
            allChunks: true
        })
    ]
};

module.exports = config;