var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


/**
* Task to Babelfy ES6 code
* Concat all js into main.js
* Compress and Uglify js
* save main.js to dist folder
**/
gulp.task('babelfy', function() {
  return gulp.src('js/*.*')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2016']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


gulp.task('browserify', function() {
  return browserify('dist/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});


/**
* Simple task compile .less files
* Concatinate all styles into style.css
* Save style.css into dist folder
**/
gulp.task('css', function() {
  return gulp.src('less/*.*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


/**
* Watch all the changes in css and js folder
* Reload browser when code changed
**/
gulp.task('watch', function() {
  gulp.watch('less/*.*', ['css']);
<<<<<<< Updated upstream
  gulp.watch('js/*.*', ['babelfy', browserSync.reload]);
});


/**
* BrowserSync setup to reloads app page
* each time browserSync.reload called in watch
* NOT IN USE
* if you want to use please run 'browserSync' before watch
* i.e. gulp.task('watch', ['browserSync'], function() {
* and browserSync.reload after css and babelfy
* i.e gulp.watch('less/*.*', ['css', browserSync.reload]);
**/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      proxy: "localhost:9800"
    }
  });
});

gulp.task('default', ['babelfy', 'css', 'watch']);
gulp.task('build', ['babelfy', 'css', 'watch']);
=======
  gulp.watch('js/*.*', ['babelfy']);
});

gulp.task('default', ['babelfy', 'browserify', 'css', 'watch']);
>>>>>>> Stashed changes
