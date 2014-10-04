var gulp = require('gulp');
var vfs = require('vinyl-fs');

gulp.task('default', function () {
  return gulp.src('src/**');
});

gulp.task('direct', function () {
  return vfs.src('src/**');
});
