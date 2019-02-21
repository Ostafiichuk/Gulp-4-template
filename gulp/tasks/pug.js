module.exports = function(){
	$.gulp.task('pug', function(){
		return $.gulp.src('src/pug/pages/*.pug')  // звідки будемо брати файли
			.pipe($.gp.pug({
				pretty:true //ця опція означає що готовий фал не буде мініфікований
			}))
			.pipe($.gulp.dest('build'));  //встановлює куди буде компілюватися готовий файл
	});
}