var gulp = require('gulp');

// var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('default', function() {
  // 默认的任务代码放在这
});


gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
});

// gulp.task('coffee', function() {
//   gulp.src('./src/**/*.coffee')
//     .pipe(coffee({bare: true}))
//     .pipe(gulp.dest('./src/'));
// });

gulp.task("babel", function () {
  return gulp.src("./src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./dist/"));
});

gulp.task('watch', ['babel', 'sass'], function() {
  gulp.watch('./src/**/*.js', ['babel']);
  gulp.watch('./src/**/*.scss', ['sass']);
});
