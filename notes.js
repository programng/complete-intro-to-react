yarn init
// npm init

yarn global add __name__
// npm install -g __name__

yarn add __name__
// npm install —save __name__

yarn
// npm install

yarn upgrade-interactive

yarn global add jest
yarn global add nodemon
yarn global add webpack
yarn global add standard


////////////////////////////////

.gitignore

node_modules/
*bundle.js
*bundle*
.DS_Store

///////////////////////////

README.md
package.json

/////////////////////////

FILE STRUCTURE
public
—img

///////////////////////////
STANDARD
standard is wrapped ESLint

$ standard
runs standard on our files
$ standard —fix
fixes errors (handy for like new line at end of file)

////////////////////////////
npm scripts (in package.json
$ lint: standard
  "scripts": {
    "test": "NODE_ENV=test jest",
    "update-test": "npm run test -- -u",
    "build": "webpack",
    "dev": "webpack-dev-server",
    "lint": "eslint js/**/*.js server.js",
    "watch": "webpack --watch"
  },
//////////////////////////////
webpack
takes all modules and creates into one file— bundles our files
loaders — processing (linter, css processing, etc)
allows us to break things down to module

$ webpack js/ClientApp.js public/bundle.js
manual way to create output file from start file
$ NODE_ENV=production webpack -p js/ClientApp.js public/bundle.js
production build (smaller) (gets rid of things like debug statements)

/////////////////////////////
BABEL

need .babelrc file for babel to do anything (in root)
presets
{
  "presets": [
    "react", // jsx stuff to es5
    ["es2015", {"modules": false}] // configuration object with the preset.. do not transform the es6 module imports, we want webpack2 to take care of the modules and not babel.. otherwise babel will take care of modules… webpack2 and rollupjs.. want packager to take care of modules because they can do tree shaking... otherwise it will be packaged in such a way that uglify cannot take out code... tree shaking is live code inclusion (not dead code elimination)... loose takes out edge cases
  ]
}
plugins and presets… presets are just a group of plugins.. for example, es2015… all the transformations for es6 to es5… in production we don’t want to use this preset…includes a lot of polyfills and es6 stuff.. for example generator polyfill..
instead,
“plugins”:[“plugin1”, “plugin2”]


babel compiles, webpack bundles,  uglify gets rid of stuff not used etc.

//////////////////////////
$ webpack --module-bind='js=babel' js/ClientApp.js public/bundle.js

webpack is calling the babel loader on any js file

could put this webpack commands in scripts— instead, we can create a config file

/////////////////////

webpack.config.js

and now with the config file we can just run `webpack`
///////////////////////


