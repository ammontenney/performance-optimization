var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');

gulp.task('default', ['min_html', 'min_css', 'min_js']);

gulp.task('min_everything', ['min_html', 'min_css', 'min_js', 'min_img']);

gulp.task('min_html', function(){
    min_html_helper('src/*.html', 'dist');
    min_html_helper('src/views/*.html', 'dist/views');
});

gulp.task('min_img', function(){
    min_img_helper('src/img/**/*', 'dist/img');
    min_img_helper('src/views/images/**/*','dist/views/images');
});

gulp.task('min_css', function(){
    min_css_helper('src/css/**/*.css', 'dist/css');
    min_css_helper('src/views/css/**/*.css', 'dist/views/css');
});

gulp.task('min_js', function(){
    min_js_helper('src/js/**/*.js', 'dist/js');
    min_js_helper('src/views/js/**/*.js', 'dist/views/js');
});

gulp.task('watch', function(){
    gulp.watch(['src/*.html', 'src/views/*.html'],['min_html']);
    gulp.watch(['src/img/**/*', 'src/views/images/**/*'],['min_img']);
    gulp.watch(['src/css/**/*.css', 'src/views/css/**/*.css'],['min_css', 'min_html']);
    gulp.watch(['src/js/*.js', 'src/views/js/*.js'], ['min_js']);
});

gulp.task('lint', function(){
    gulp.src(['src/js/*.js', 'src/views/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Some helper functions for above

function min_img_helper(src, dest){
    gulp.src(src)
        .pipe(imagemin())
        .pipe(gulp.dest(dest));
}

function min_html_helper(src,dest){
    var opt = {
        disabledTypes: ['svg', 'img', 'js'],
        js: uglify,
        css: minifyCSS
        };
    gulp.src(src)
        .pipe(inline(opt))
        .pipe(minifyHTML())
        .pipe(gulp.dest(dest));
}

function min_css_helper(src, dest){
    gulp.src(src)
        .pipe(minifyCSS())
        .pipe(gulp.dest(dest));
}

function min_js_helper(src, dest){
    gulp.src(src)
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}

// end
