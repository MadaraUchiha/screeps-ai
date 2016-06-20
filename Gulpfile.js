const gulp = require('gulp');
const webpack = require('webpack-stream');
const gulpScreeps = require('gulp-screeps');
const insert = require('gulp-insert');
const credentials = require('./credentials.json');

const paths = {
    src: 'src/**/*.js'
};

gulp.task('default', () =>
    gulp.src('src/main.js')
        .pipe(webpack({ output: { filename: "main.js" } }))
        .pipe(insert.prepend("module.exports = ")) // This line makes webpack's boilerplate be compatible with Screeps.
        .pipe(gulpScreeps(credentials)));

gulp.task('watch', () => gulp.watch(paths.src, ['default']));