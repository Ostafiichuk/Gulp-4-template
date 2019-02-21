`use strict`



global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),

	/*змінна path  є масивом із шляхами до всіх тасків*/
	path: require('./gulp/config/tasks.js')
	
};

$.path.forEach(function(taskPath){
	require(taskPath)();
});

/* дефолтний таск*/
/*паралельно запускаються pug i sass а після того watch і serve*/
/*watch i serve запускаємо паралельно
оскільки watch працює весь час і 
якщо не вказати gulp.parallel()
то watch ніколи не закінчиться а 
serve відповідно ніколи не розпочнеться
*/
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'sass'),
	$.gulp.parallel('watch', 'serve') 
));
