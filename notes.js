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
webpack --watch
or
npm run build -- --watch // the -- pass the following things to the thing in the script...
//////////////////////////
ESLINT
use eslint and include standard rules
b/c if just use standard, can't customize
.eslintrc.json

"lint": "eslint js/**/*.js webpack.config.js",
go into js directory and lint everything and go recursively deep...  also webpack.config.js
npm run lint -s
the -s gets rid of the ugly warnings
npm run lint -s -- --fix

can put linting in webpack that will run in webpack watch.. use the "pre-loader" (not preloader in wp2, just wp1.., use the enforce pre in wp2)
///////////////////////////
webpack-dev-server
devserver has watch built in, so only ened to run devserver
put devserver bit in wp config file
useful if have python or ruby back-end, not so much node, for example.

hot module reload
like css live reload, the code gets reloaded on the fly

/////////////////////

React Router v4

HashRouter - HOC (encapsulates behavior, has no display/view of it's own), can route, will beroot component
Match
don't have to do exactly...
can put nav or someting as child of hashrouter, anything you want everywhere

HashRouter #
ugly, but server doesn't have to worry about anything...
server needs to be aware of client side routes...
makes it so you don't have to configure your server to care about your client side router

don't use hashrouter if possible

use browserrouter

node can consume reactrouter routes with universal rendering
//////////////////////////

