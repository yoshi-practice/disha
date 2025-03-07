const gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

gulp.task('browserify', () => {

    var browserified = transform(function (filename) {
      var b = browserify(filename);
      b.add(filename);
      return b.bundle();
    });

    return gulp.src('./src/js/*.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
  }
);

gulp.task('scss', () => {
  const sass = require('gulp-sass')
  const cssnext = require('postcss-cssnext')
  const postcss = require('gulp-postcss')
  const processors = [cssnext({
    browsers: ['last 2 version']
  })]

  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('build',
  gulp.parallel('browserify', 'scss')
);

gulp.task('serve', done => {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  })
  done()
})

gulp.task('watch', () => {
  const browserReload = done => {
    browserSync.reload()
    done()
  }
  gulp.watch('./dist/**/*', browserReload);
  gulp.watch('./index.html', browserReload);
  gulp.watch('./src/js/**/*', gulp.series('browserify'));
  gulp.watch('./src/scss/**/*', gulp.series('scss'));
})

gulp.task('default', gulp.series('serve', 'watch'))
