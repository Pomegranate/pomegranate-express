/**
 * @file StaticFiles
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var serveStatic = require('serve-static');
/**
 *
 * @module StaticFiles
 */

exports.options = {
  workDir: './public'
}

exports.metadata = {
  name: 'StaticFiles',
  type: 'merge',
  param: 'Middleware',
  depends: ['ExpressCore']
}

exports.plugin = {
  load: function(inject, loaded) {
    var publicDirectory = this.options.workDir;
    var Files = {serveStatic: serveStatic(publicDirectory)}
    loaded(null, Files)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}