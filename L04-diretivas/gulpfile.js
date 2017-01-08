var gulp = require('gulp');
// <typescript>
var ts = require('gulp-typescript');
var tsProject = ts.createProject('e2e/tsconfig.json');
// </typescript>
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('default', function() {});

gulp.task('typescript', function() {
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build'))
});

gulp.task('assets', function() {
  return gulp.src('app/**/*.{html,css}')
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['typescript', 'assets'], function() {
  watch('app/**/*.*', function() {
    gulp.start(['typescript', 'assets'])
  });
});