var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
    name: 'js',
    context: __dirname,
    entry: './client/js/app.js',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '/public/js'),
        publicPath: '/public'
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    devtool: 'source-map',
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        }, {
            test: /\.handlebars$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'handlebars-loader?runtime=handlebars/runtime'
        }]
    },
    externals: {
        jquery: '$',
        lodash: '_',
        backbone: 'Backbone',
        'handlebars/runtime': 'Handlebars',
        'handlebars': 'Handlebars'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/jquery/dist/jquery.min.js', to: 'vendor' },
            { from: 'node_modules/lodash/lodash.min.js', to: 'vendor' },
            { from: 'node_modules/handlebars/dist/handlebars.min.js', to: 'vendor' },
            { from: 'node_modules/backbone/backbone-min.js', to: 'vendor' },
            { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'vendor' }
        ])
    ],
}, {
    name: 'assets',
    context: __dirname,
    entry: './client/assets/styles/app.scss',
    output: {
        filename: 'app.css',
        path: path.join(__dirname, '/public/assets'),
        publicPath:'/public'
    },
    module: {
        preLoaders: [{
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'sasslint'
        }],
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new CopyWebpackPlugin([
            { from: 'client/assets/images/cancel-circle.svg', to: 'images' },
            { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css' }
        ])
    ],
    sasslint: {
        configFile: './.sass-lint.yml'
    }
}];
