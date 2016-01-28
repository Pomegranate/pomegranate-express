/**
 * @file ExpressBundledMiddleware
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Provides Overrideable standard middleware.
 * @module BundledMiddleware
 * @injector {Merge} Merges all returned objects into the provided dep name.
 * @property {Object} options - This plugin has no options
 * @injects: {function} Middleware - 404
 * @injects: {function} Middleware - 500
 */

module.exports = {
  metadata: {
    name: 'BundledMiddleware',
    param: 'Middleware',
    layer: 'core',
    type: 'merge'
  },
  plugin: {
    load: function(inject, loaded) {
      var Deps = [
        {param: 'Middleware', load: require('./middleware/404'), type: 'merge'},
        {param: 'Middleware', load: require('./middleware/500'), type: 'merge'}
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