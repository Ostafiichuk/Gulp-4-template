module.exports = function(){
	$.gulp.task('serve', function() {
	    $.browserSync.init({
	        server: {
	            baseDir: "./build"
	        }
	    });
	    $.browserSync.watch('build', $.browserSync.reload) //слідкуємо за папкою build і коли там є якісь зміни перезавантажуємо
	});
}