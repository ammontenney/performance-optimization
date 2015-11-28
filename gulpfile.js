var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', ['min_html']);

gulp.task('min_html', function(){
    min_html_helper('*.html', 'dist');
    min_html_helper('views/*.html', 'dist/views');
});

gulp.task('min_images', function(){
    min_img_helper('img/**/*', 'dist/img');
    min_img_helper('views/images/**/*','dist/views/images');
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


// end
