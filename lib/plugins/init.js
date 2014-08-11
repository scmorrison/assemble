'use strict';

/**
 * Module dependencies.
 */

var through = require('through2');

var parseMatter = require('../utils/parse-matter');
var parsePath = require('../utils/parse-path');
var extendFile = require('../utils/extend-file');


module.exports = function initPlugin(options) {
  var assemble = this;

  return through.obj(function (file, encoding, next) {
    if (file.isNull()) {
      this.push(file);
      return next();
    }
    console.log(assemble)
    file = parseMatter(file, encoding, next);
    file = parsePath(file, encoding, next);
    file = extendFile(file, encoding, next);
    this.push(file);
    next();
  });
};