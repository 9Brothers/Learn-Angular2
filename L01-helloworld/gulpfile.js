var gulp = require('gulp');
// <typescript>
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
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

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['typescript', 'html'], function() {
  watch('app/**/*.*', function() {
    gulp.start(['typescript', 'html'])
  });
});