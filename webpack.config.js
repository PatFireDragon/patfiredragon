const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages_mod = require('./pages');

const pages = pages_mod.pages;


module.exports = {

    mode: 'development',

    entry: (
        pages.filter(page => page.build).reduce((config, page) => {
        config[page.name] = `./src/${page.name}/index.js`;
        return config;
      }, {})
    ),

    output: {
        filename: "./[name]/index.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                },
            }
        ]
    },

    resolve: {
        extensions: ['.mjs', '.js', '.svelte']
    },

    plugins: [].concat(
        pages.filter(page => page.build).map(
          page =>
            new HtmlWebpackPlugin({
              inject: true,
              template: `./src/${page.name}/index.html`,
              filename: `./${page.name}/index.html`,
              chunks: [page.name],
            })
        ),
    ),

    optimization: {
        splitChunks: {
          chunks: "all",
        },
    },

}