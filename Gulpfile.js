var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require ('gulp-autoprefixer');
var cssnano = require ('gulp-cssnano');
var uglify = require('gulp-uglify');
 
var sassInput = ['scss/**/*.scss'];
var jsInput = ['js/**/*.js']

gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sass().on('error', swallowError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function(){
   return gulp
    .src(jsInput)
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));
})

//Watch task
gulp.task('default',function() {
    gulp.watch(sassInput,['sass']);
});

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}    
