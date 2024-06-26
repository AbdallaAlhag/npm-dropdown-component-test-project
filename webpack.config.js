const path = require('path');

module.exports = {
    entry: './script.js', // Entry point of your application
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

};