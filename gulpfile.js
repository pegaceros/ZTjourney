var gulp = require('gulp');

// var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    // 默认的任务代码放在这
});


gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./package/dist/'));
});


gulp.task("babel", function() {
    gulp.src("./src/**/*.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("./package/dist/"));
});

gulp.task('watch', ['babel', 'sass'], function() {
    gulp.watch('./src/**/*.js', ['babel']);
    gulp.watch('./src/**/*.scss', ['sass']);
});


gulp.task('copy', function() {
    gulp.src('./package/**/*')
        .pipe(rename(function(path) {
            path.dirname = path.dirname.toLowerCase();
            path.basename = path.basename.toLowerCase();
            path.extname = path.extname.toLowerCase();
        }))
        .pipe(gulp.dest("../ZhouTao/"));
});
