var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	prefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-minify-css'),
	rimraf = require('rimraf'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	imagemin = require('gulp-imagemin');

var path = {
	build: {
		html: 'dist/',
		js: 'dist/js/',
		style: 'dist/css/',
		img: 'dist/img'
	},
	src: {
		html: 'src/index.html',
		js: 'src/js/main.js',
		style: 'src/style/main.scss',
		img: 'src/img/**'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss'
	},
	clean: './build'
};
gulp.task('img:minify', function() {
    return gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
});
gulp.task('webserver', function server() {
	browserSync({
		server: ["./dist", "./src"],
		host: 'localhost',
		port: 3000,
		tunnel: true
	});
});

gulp.task('js:build', function() {
	return gulp.src(path.src.js)
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}))	
});
gulp.task('html:build', function() {
	return gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});
gulp.task('style:build', function() {
	return gulp.src(path.src.style)
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(prefixer())
			.pipe(cssmin())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(path.build.style))
			.pipe(reload({stream: true}))
});

var build = gulp.series('js:build', 'html:build', 'style:build', 'img:minify');
gulp.task('build', build);
gulp.task('watch', function watch() {
	gulp.watch([path.watch.js], gulp.series('js:build'));
	gulp.watch([path.watch.style], gulp.series('style:build'));
	gulp.watch([path.watch.html], gulp.series('html:build'));
});

gulp.task('clean', function cleanDist(cb) {
	rimraf(path.clean, cb);
});

gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));