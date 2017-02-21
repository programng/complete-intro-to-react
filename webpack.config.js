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
        include: path.resolve(__dirname, 'js'), // if not in js directory, do not run
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ // use 'use' if there's multiple loaders,
          'style-loader', //injects style into js... bundling could be bad b/c need js to load for css to load
          { // use object if you need to pass configs to your loader
            loader: 'css-loader', //need both style and css
            options: {
              url: false // path to include image... itll try to inline the image, this means don't inline my images
            }
          }
        ]
      }
    ]
  }
} // use this because running in node
//__dirname is the root,it's a node thing regardless of where ran from

