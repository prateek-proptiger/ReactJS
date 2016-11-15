// compiles jsx to js and launches dev server
module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true, // reloadin on save
        port: 3333 // server port
    },
    module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
              presets: ['es2015', 'react']
          }
        }]
    }
}
