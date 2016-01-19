/**
 * @file ExpressApplication
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var Express = require('express');
/**
 *
 * @module ExpressApplication
 */
module.exports = {
  metadata: {
    name: 'ExpressApp',
    layer: 'core'
  },
  plugin: {
    load: function(inject, loaded) {
      var App = Express()
      var Deps = [
        {name: 'Express', load: App},
        {name: 'Router', load: Express.Router, type: 'factory'}
      ]
      loaded(null, Deps)
    },
    start: function(done) {
      done()
    },
    stop: function(done) {
      done()
    }
  }
};