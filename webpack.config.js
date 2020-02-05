const Webpack = require('webpack')
const MIniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MIniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MIniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader']
        }]
    }
}