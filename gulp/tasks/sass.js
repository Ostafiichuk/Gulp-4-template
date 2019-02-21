module.exports = function(){
	$.gulp.task('sass', function(){
		return $.gulp.src('src/static/scss/*.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.csso())
			.pipe($.gp.autoprefixer({  //добавляє автоматично префікси
				browsers: ['last 10 versions']
			}))
			.on("error", $.gp.notify.onError({
		        title: "Error sass"
	      	}))
	      	.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/css'));
	});
}