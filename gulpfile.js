/* jshint esversion:6 */

require('./gulp/gulp-styles');


let gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	watch = require('gulp-watch');


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/styles/*.css', function() {
		//browserSync.reload();
		gulp.start('cssInject');
	});

	watch('./app/scripts/*.js', function() {
		browserSync.reload();
		//gulp.start('scriptsRefresh');
	});
});


gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/temp-styles/main.css')
			   .pipe(browserSync.stream());
});