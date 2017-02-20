const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval', // or source-map, but this takes longer.. eval is a faster/dirtier way
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json'] // import Blah from '.Blah' ... will check if ./Blah exists, then ./Blah.js then ./Blah.json
  },
  stats: { //what webpack will report in
    colors: true,
    reasons: true, //why things fail
    chunks: true
  },
  module: {
    rules: [ // if passes these rules, run through loader
      {
        // exclude: /node_modules/,
        include: path.resolve(__dirname, 'js'), //if not in js directory, do not run
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
} // use this because running in node
//__dirname is the root,it's a node thing regardless of where ran from

