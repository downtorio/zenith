var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	hexrgba = require('postcss-hexrgba'),
	mixins = require('postcss-mixins'),
	nested = require('postcss-nested'),
	postcss = require('gulp-postcss');


gulp.task('styles', function() {
	return gulp.src('./app/styles/main.css')
			   .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer()]))
			   .on('error', function(errorInfo) {
			   		console.log(errorInfo.toString());
			   		this.emit('end');
			   })
			   .pipe(gulp.dest('./app/temp/temp-styles'));
});