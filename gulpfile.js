var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

// gulp.task('coffee', function() {
//   gulp.src('./src/**/*.coffee')
//     .pipe(coffee({bare: true}))
//     .pipe(gulp.dest('./package/src/'));
// });

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['sass'], function() {
  // gulp.watch('./src/**/*.coffee', ['coffee']);
  gulp.watch('./src/**/*.scss', ['sass']);
});
