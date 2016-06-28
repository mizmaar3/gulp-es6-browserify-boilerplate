# gulp-es6-browserify-boilerplate

> Project tested with node v 6.2.2

A very basic boilerplate to start your Javascript project with [ES6](https://babeljs.io/docs/learn-es2015/) script and using [Browserify](http://browserify.org/) module bundler and [Less](http://lesscss.org/) css preprocessor.

> Browserify lets you require('modules') in the browser by bundling up all of your dependencies.

- The aim of this package is to start basic web project which usually have JS and css (less css) files, build them for release by compiling ES2015 code and concatenate multiple js and npm bundles into single file using `Browserify` and do the same for css style sheets.

- Bundling done with simple commands using [Gulp](http://gulpjs.com/) which is famous build system to automate build process.


## Install

First, clone the repo via git:

```bash
git clone https://github.com/mizmaar3/gulp-es6-browserify-boilerplate your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```


## Build

Run this command to build and bundle the project.

```bash
$ npm run build
```

or simple run

```bash
$ gulp
```

To get minified+uglified version of bundle.js please run

```bash
$ npm run release
```


inside your project folder


## Start Server

To start local server please run

```bash
$ npm run start
```

and goto http://127.0.0.1:9300 to test if code worked. You should get some text on the page.


## DevTools

#### Toggle Chrome DevTools

- OS X: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>


## Example Code Explanation

#### The JS folder

- So JS folder have three utility files and one main.js file which using utilities and showing some results in browser console. `Browserify` will do the magic for bundling. Everything which `Require` in main.js or in util files will be appended into bundle.js after building the project. `array-union.js` using `underscore.js` to union some sets while ´get-mime-type.js´ using npm package called `simple-mime` to get mimetype of a file. As utilities files have ES6 code it will be compiled by `babel js` after that `Browserify` will append all dependencied into single `bundle.js` file.. Yes even whole `underscore.js` can be found in ´bundle.js´ and of course whole `simple-mime` package and its dependencies as well.


#### The LESS folder

- Less folder contains `.less` files which will be compiled with `gulp-less` and concatenated into single file `style.css`, can be found in `dist` folder after building project.
