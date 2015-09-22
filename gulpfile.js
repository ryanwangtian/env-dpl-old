var gulp = require('gulp');

// 引入组件
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

// 编译Sass, 输出未经压缩和压缩后的css
gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./dist'))
        .pipe(minifyCss())
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./dist'));
});

// 输出未经压缩和压缩后的js
gulp.task('scripts', function() {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('./dist'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('sass', 'scripts');
});


gulp.task('watch', function(){
    gulp.run('sass', 'scripts');

    //监听文件变化
    gulp.watch('./src/**/*.scss', function(){
        gulp.run('sass', 'scripts');
    });
});
