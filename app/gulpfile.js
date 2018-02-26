const gulp = require('gulp');
const concat = require('gulp-concat')
const del = require('del');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
const minifyCSS = require('gulp-minify-css');
const flatten = require("gulp-flatten")

const buildDir = './dist';
const srcDir = './src';

gulp.task('clean', function() {
  return del.sync(buildDir + '/**/*');
});

// Processes sass and copies to build dir
gulp.task('sass', function() {
  return gulp.src(srcDir + '/**/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildDir));
});

// Copies static css from ./src to build dir
gulp.task('bundle:css', function() {
  return gulp.src([
    'node_modules/lightgallery.js/dist/css/lightgallery.min.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
  ])
    .pipe(minifyCSS())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(buildDir+ '/css/'));
})

// Copies static fonts from ./src to build dir
gulp.task('bundle:js', function() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/smooth-scroll/dist/js/smooth-scroll.polyfills.min.js ',
    'node_modules/lightgallery.js/dist/js/lightgallery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(buildDir + '/js/'));
})

// Copies static fonts from ./src to build dir
gulp.task('bundle:fonts', function() {
  return gulp.src([
    'node_modules/lightgallery.js/dist/fonts/**/*.{ttf,woff,eof,svg}',
  ])
    .pipe(gulp.dest(buildDir + '/fonts/'));
})

// Copies static fonts from ./src to build dir
gulp.task('slick:fonts', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/fonts/**/*.{ttf,woff,eof,svg}',
  ])
    .pipe(gulp.dest(buildDir + '/css/fonts/'));
})

// Copies static fonts from ./src to build dir
gulp.task('slick:loader', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/ajax-loader.gif',
  ])
    .pipe(gulp.dest(buildDir + '/css/'));
})

// Copies static html from ./src to build dir
gulp.task('copy:html', function() {
  return gulp.src(srcDir + '/**/*.html')
    .pipe(gulp.dest(buildDir));
})

// Copies static js from ./src to build dir
gulp.task('copy:js', function() {
  return gulp.src(srcDir + '/**/*.js')
    .pipe(gulp.dest(buildDir));
})

// Copies static assets from ./src/img to build dir
gulp.task('copy:assets', function() {
  return gulp.src([
    'node_modules/lightgallery.js/dist/img/**/*.{gif,png,jpg,jpeg,svg}',
    srcDir + '/img/**/*']
  )
    .pipe(flatten())
    .pipe(gulp.dest(buildDir +'/img/'));
});

// Wrapper tasks for building
gulp.task('bundle-slick', ['slick:fonts', 'slick:loader']);
gulp.task('bundle', ['bundle:css', 'bundle:js', 'bundle:fonts', 'bundle-slick']);
gulp.task('static', ['copy:html', 'copy:js', 'copy:assets']);
gulp.task('build', ['clean', 'sass', 'bundle', 'static']);

// Serve locally and watch for changes
return gulp.task('serve', ['build'], function() {
  gulp.src(buildDir)
    .pipe(server({
      livereload: true,
      open: true,
      port: 8080,
      log: 'debug'
    }));
  return gulp.watch(srcDir + '/**/*', ['build']);
});
