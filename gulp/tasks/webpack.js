'use strict';

var path = require("path");
var gulp = require("gulp");
var webpack = require('gulp-webpack');

var config = require('../config').webpack;

gulp.task('webpack', function() {
    return gulp.src(config.src)
        .pipe(webpack(config.settings))
        .pipe(gulp.dest(config.dest));
});