var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageresize = require('gulp-image-resize');

gulp.task('default', ['']);

gulp.task('min_images', function(){
    min_img('img/**/*', 'dist/img');
    min_img('views/images/**/*','dist/views/images');
});

function min_img(src, dest){
    gulp.src(src)
        .pipe(imagemin())
        .pipe(gulp.dest(dest));
}




// end
