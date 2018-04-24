"use strict";
var gulp = require('gulp'); // Require gulp

// Sass dependencies
var sass = require('gulp-sass'); // Compile Sass into CSS
var minifyCSS = require('gulp-clean-css'); // Minify the CSS

// Minification dependencies
// var minifyHTML = require('gulp-minify-html'); // Minify HTML
var concat = require('gulp-concat'); // Join all JS files together to save space
// var stripDebug = require('gulp-strip-debug'); // Remove debugging stuffs
var uglify = require('gulp-uglify'); // Minify JavaScript
// var imagemin = require('gulp-imagemin'); // Minify images

// Other dependencies
// var size = require('gulp-size'); // Get the size of the project
var browserSync = require('browser-sync'); // Reload the browser on file changes
// var jshint = require('gulp-jshint'); // Debug JS files
// var stylish = require('jshint-stylish'); // More stylish debugging

// Tasks -------------------------------------------------------------------- >

// Task to compile Sass file into CSS, and minify CSS into build directory
gulp.task('styles', function() {
  gulp.src('./Sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./wwwroot/css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

// Run all Gulp tasks and serve application
gulp.task('default', ['styles'], function() {
  gulp.watch('Sass/**/*.scss', ['styles']);
//   gulp.watch('app/*.html', browserSync.reload);
//   gulp.watch('app/scripts/**/*.js', browserSync.reload);
});
