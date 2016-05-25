var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require ('gulp-autoprefixer');
var cssnano = require ('gulp-cssnano');

var sassInput = ['scss/**/*.scss'];

gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sass().on('error', swallowError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/**/*.scss',['sass']);
});

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}    
