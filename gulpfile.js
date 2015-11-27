var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageresize = require('gulp-image-resize');

gulp.task('default', ['min_images']);

gulp.task('min_images', function(){
    var src='img/**/*';
    var dest='dist/img';
    gulp.src(src)
        .pipe(changed(dest))
        .pipe(imagemin())
        .pipe(gulp.dest(dest));

    src='views/images/**/*';
    dest='dist/views/images';
    gulp.src(src)
        .pipe(changed(dest))
        .pipe(imagemin())
        .pipe(gulp.dest(dest));

    src='dist/views/images/pizzeria.jpg';
    dest='dist/views/images';
    gulp.src(src)
        .pipe(imageresize({width:720,height:540,crop:true}))
        .pipe(gulp.dest(dest));

});





// end
