module.exports = function(){
	
/*налаштування стеження за файлами

gulp.watch вибирає файли за якими слідкувати,
gulp.series запускає відповідний таск,
*/

	$.gulp.task('watch', function(){
		$.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'));
		$.gulp.watch('src/static/scss/**/*.scss',$.gulp.series('sass'))
	});
}