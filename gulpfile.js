// Modules
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
// paths
var partials = 'app/assets/less/partials/**'
var lesssource = 'app/assets/less/**/**';
var destination = 'public/css/style';
var topfile = 'app/assets/less/style.less';
// Tasks


gulp.task('default', function () {
gulp.watch(partials,function(event){
	gulp.src(topfile)
		.pipe(watch())
		.pipe(plumber()) // if errors it continues
		.pipe(less())
		.pipe(prefix("last 10 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
		//.pipe(minifycss ())
		.pipe(gulp.dest(destination));
});

});
