const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: ['./demo/demo.js'],
    target: 'web',
    output: {
        filename: 'demo-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.join(__dirname, 'demo')
        ],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'node_modules/openseadragon/build/openseadragon/images', to: 'images' },
                { from: 'demo/images', to: 'images' },
                { from: 'demo/*', to: 'demo' }
            ]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        // new EslintWebpackPlugin({
        //     extensions: ['js'],
        //     context: path.resolve(__dirname, 'demo'),
        //     overrideConfigFile: path.resolve(__dirname, 'eslint.config.js'),
        //     files: '**/*.js',
        // })
    ]
};
