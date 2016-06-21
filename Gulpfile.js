const gulp = require('gulp');
const webpack = require('webpack-stream');
const gulpScreeps = require('gulp-screeps');
const insert = require('gulp-insert');
const credentials = require('./credentials.json');
const eslint = require('gulp-eslint');

const paths = {
    src: 'src/**/*.js'
};

gulp.task('default', ['lint', 'commit']);

gulp.task('commit', () =>
    gulp.src('src/main.js')
        .pipe(webpack({ output: { filename: "main.js" } }))
        .pipe(insert.prepend("module.exports = ")) // This line makes webpack's boilerplate be compatible with Screeps.
        .pipe(gulpScreeps(credentials)));

gulp.task('lint', () =>
    gulp.src(paths.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError()));

gulp.task('watch', () => gulp.watch(paths.src, ['default']));