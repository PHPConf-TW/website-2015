import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import minimist from 'minimist';
import revReplace from 'gulp-rev-replace';

const $ = gulpLoadPlugins();
const argv = minimist(process.argv.slice(2));
const src = Object.create(null);

// Clean output directory
gulp.task('clean', cb => {
  del(['build'], cb);
});

// Static files
gulp.task('assets', () => {
  src.assets = 'src/public/**';
  return gulp.src(src.assets)
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'assets'}));
});

gulp.task('webpack', cb => {
  const config = require('./webpack.config.js');
  const verbose = !!argv.verbose;

  // run webpack
  webpack(config, (err, stats) => {
    if(err) {
      throw new gutil.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    cb();
  });
});

gulp.task('revision', cb => {
  return gulp.src(['build/assets/**/*.js'])
    .pipe($.rev())
    .pipe(gulp.dest('build/assets'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('build'));
});

gulp.task('revreplace', ['revision'], cb => {
  let manifest = gulp.src('build/rev-manifest.json');

  return gulp.src('build/index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('build'));
});

gulp.task('minify-html', cb => {

  return gulp.src('build/index.html')
    .pipe($.minifyHtml())
    .pipe(gulp.dest('build'));
});

// Build the app from source code
gulp.task('build', ['clean'], cb => {
  runSequence(['assets', 'webpack'], ['revreplace'], ['minify-html'], cb);
});
