'use strict';

var gulp = require("gulp");

var config = require("../config").watch;

gulp.task('watch', function() {
    config.targets.forEach(function(target) {
        gulp.watch(target.src, target.tasks);
    });
});