
var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('compileSass',function(){
    // console.log(2333)
    // 查找Sass文件
    gulp.src('./src/sass/*.scss')

    .pipe(sass())

    .pipe(gulp.dest('./src/css/'))



});
gulp.task('jtSass',function(){


    gulp.watch('./src/sass/*.scss',['compileSass'])
})