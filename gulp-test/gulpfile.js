var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
//合并文件
gulp.task('minifyjs', function() {
    return gulp.src('src/js/*.js') //操作的源文件
        .pipe(concat('build.js')) //合并到临时文件     
        .pipe(gulp.dest('dist/js')) //生成到目标文件夹
        .pipe(rename({suffix: '.min'})) //重命名  
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'));
});

//less处理任务
gulp.task('lessTask', function () {
    return gulp.src('src/less/*.less')
        .pipe(less()) 
        .pipe(livereload())
        .pipe(gulp.dest('src/css'));
  })
//css处理任务, 指定依赖的任务
gulp.task('cssTask',['lessTask'], function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('build.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});
//压缩html任务
gulp.task('htmlMinify', function() {
    return gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});
gulp.task('watch', ['default'], function () {    
    //开启监视
    livereload.listen();
    //监视指定的文件, 并指定对应的处理任务
    gulp.watch('src/js/*.js', ['minifyjs'])
    gulp.watch(['src/css/*.css','src/less/*.less'], ['cssTask','lessTask']);
});


gulp.task('default', ['minifyjs', 'cssTask','htmlMinify']);