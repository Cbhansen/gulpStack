var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src('./app/css/styles.scss')
		.pipe(sass())
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('./build'))
});


gulp.task('default', ['sass'], function() {
	gulp.watch('./app/css/styles.scss', ['sass'])
});