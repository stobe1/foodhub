'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var rigger = require('gulp-rigger');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var path = {
  build: {
    html: 'build/',
    js: 'build/js',
    style: 'build/css',
    img: 'build/img'
  },
  src: {
    html: 'src/layouts/**/*.html',
    js: 'src/js/main.js',
    style: 'src/assets/main.styl',
    img: 'src/assets/images/**/*'
  },
  watch: {
    html: 'src/layouts/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/assets/main.styl',
    img: 'src/assets/images/**/*'
  }
};

var config = {
  server: {
    baseDir: './build'
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: 'foodHub'
};

gulp.task('webserver', function() {
  browserSync(config);
});


gulp.task('html:build', function() {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('js:build', function() {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({
      stream: true
    }));
});


gulp.task('style:build', function() {
  return gulp.src(path.src.style)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(csso())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest(path.build.style))
    .pipe(reload({
      stream: true
    }));
});


gulp.task('image:build', function() {
  return gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'image:build'
]);

gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
});

gulp.task('default', ['build', 'webserver', 'watch']);
