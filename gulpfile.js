"use strict";

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('default', gulp.series(javascript));

function javascript() {
    var b = browserify({
        entries: './_portfolio/learning-goals/page.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('learning-goals.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./_site/js'));
}
javascript.description = 'Bundles each page javascript into a single file';

gulp.task('watch',
    gulp.series('default', function watch() {
        gulp.watch('./_portfolio/learning-goals/page.js', gulp.series('default'));
    })
);
