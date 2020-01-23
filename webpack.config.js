var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },    
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'bcCometd'
    },
//    node: { fs: 'empty' },
    target: 'web',
    optimization: { minimize: true }
};
