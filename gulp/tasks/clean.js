'use strict';

var path = require("path");
var gulp = require("gulp");
var del = require("del");

var config = require("../config");

gulp.task('clean', function(cb) {
    del(path.join(config.dest, '*', '**'), cb);
});