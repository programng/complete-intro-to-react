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

browserrouter
add to wp config
    historyApiFallback: true

///////////////////////////
Link to
///////////////////////////

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

/////////////////
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
/////////////

const {shape, string, bool} = React.PropTypes

  propTypes: {
    show: shape({
      poster: string,
      title: string,
      year: string,
      description: string
    })
  },

  ///////////////////////////////////

            // <ShowCard key={show.imdbID} {...show} />
            // <ShowCard key={show.imdbID} poster={show.poster} title={show.title} />

/////////////////////////////////////

state
components can only modify their own state... if need to modify parent's state... sent function from parent and then the child will call it but the parent will modify itself

////////////////////////////////////
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  //////////////

  JEST
  jest will find .spec.js files
  and maybe some others
  automatically
  can put the spec file next to the actual file

need to have babel transpile code-- for import statements, b/c we want to use ES6 import statements... before we told webpack/babel to ignore trsnapiling our modules... but we want to use es6 syntax with node? so we need to tell babel
add this to babelrc file, this transformer/plugin will only run in our test environment
  "env": {
    "test": {
      "plugins": ["transform-es2015-modules-commonjs"]
    }
compile modules when in a testing scenario...
    then need to do
  $ NODE_ENV=test jest
  rather than just $ jest

    JEST CACHES OUR BABel environment, so if we change the babel environment we need to do: we need to do --no-cache to clear out the cache
  }

  $ NODE_ENV=test jest --no-cache


NODE_ENV=test jest -u

-u means update the snapshot (when something has changed)

each test should have one state.. if there are multiple states you want to test, write multiple snapshots
tests should be deterministic!!

$ NODE_ENV=test jest --watch
this will rerun the test suite when we change something... there are other things you can do with this too...

//////////////////////////////////////


ENZYME... from airbnb... facebook uses it
to shallow test-- so change in one thing only shows error for that component
for example, if our show card fails, we nly want the show card test to fail, not the search test

anything you can dump to json you can snapshot test on... for example, a server response

to do the shallow stuff, get rid of the renderer thing and use the shallow stuff (see search spec)


$ npm run test
$ npm test
$ npm t
these are all equivalent

-- let you put more stuff after your npm script

enzyme most compelling reason to use is its shallow renderer
sr doens't pull in js dom, doesn't use a browser, doesn't use phantom etc.... fast!

two additional depths from enzyme... render... a lot slower.. don't use it if possible... to interact with dom apis is why you'd use it
static rendering.... if you need to completely render everything out and have dom exploration available to you... jsdom and wraps cheerio on top of that.. cheerio is good for offline static analysis of html... cheerio has a jquery like interface to it

brian holt abstracts business logic into modules and test modules... don't really test react component themselves b/c so much a/b testing at netflix, the thrasup in markup is huge

///////////////////////
CODE COVERAGE

ALREADY BUILT INTO JEST
$ npm run test -- --coverage
code coverage report via instanbul, what everyone uses for javascript

$ open coverage/lcov-report/index.html
this opens in your browser...
can see how many times things get run (like functions get called)



//////////////////////

HOT MODULE RELOADER
in between versions... new version doesn't work wellw ith this app yet...

//////////////////////////


passing parameters through router url
          <Match pattern='/details/:id' component={Details} />

/////////////

sending props n


<Match
              pattern='/search'
              component={(props) => <Search shows={preload.shows} {...props} />}
          />
