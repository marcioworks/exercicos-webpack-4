const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'principal.js',
        path: __dirname +'/public'
    }
}