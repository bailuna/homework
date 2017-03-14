var gulp=require('gulp');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var minifyCss = require("gulp-minify-css");
var server=require('gulp-webserver');

gulp.task('sass',function(){
	gulp.src('scss/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist'))
});
gulp.task('minifyCss', function () {
    gulp.src('./css/*.css') 
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
});
gulp.task('server',function(){
	gulp.src('./')
	.pipe(server({
		open:true,
		livereload:true,
		directoryListing:true
	}))
});
gulp.task("default",function(){
	gulp.watch('./scss/*.scss',['sass']);
	gulp.watch('index.html');
})