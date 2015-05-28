'use strict';

var path = require('path');

var src = './src';
var dest = './build';

module.exports = {
    dest: dest,
    webpack: {
        settings: {
            output: {
                filename: 'index.js'
            },
            stats: {
                colors: true
            },
            module: {
                loaders: [
                        {
                            test: /.jsx$/,
                            loader: 'babel-loader'
                        },
                        {
                            test: /.js$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader'
                        },
                        {
                            test: /.json$/,
                            loader: 'json'
                        }
                    ]
            },
            resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
            },
            devtool: 'inline-source-map',
            debug: true
        },
        src: path.join(src, 'js', 'index.js'),
        dest: path.join(dest, 'js'),
        outputName: 'index.js',
        sourcemaps: './maps'
    },
    html: {
        src: path.join(src, 'index.html'),
        dest: dest
    },
    watch: {
        targets: [
                {
                    src: path.join(src, 'js', '**', '*.js'),
                    tasks: ['webpack']
                },
                {
                    src: path.join(src, 'index.html'),
                    tasks: ['html']
                }
            ]
    }
};