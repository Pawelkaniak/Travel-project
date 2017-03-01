var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var refresh = require('gulp-refresh');



gulp.task('jshint', function() { 
  return gulp.src('js/**/*.js')
  .pipe(jshint())
    .pipe(jshint.reporter('default'))
})


gulp.task('task-name', function() {
  return gulp.src('scss/style.scss')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  
})



gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('css'))
    .pipe(refresh())
})
gulp.task('watch', function() {
  refresh.listen()
  gulp.watch('scss/*.scss', ['sass']);
  
})




gulp.task('default', ['jshint', 'sass', 'watch']);