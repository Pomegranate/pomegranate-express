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
    name: 'ErrorMiddleware',
    param: 'Middleware',
    type: 'merge',
    depends: ['ExpressCore']
  },
  plugin: {
    load: function(inject, loaded) {
      var Bundled = {
        404: require('./middleware/404'),
        500: require('./middleware/500')
      }
      loaded(null, Bundled)
    },
    start: function(done) {
      done()
    },
    stop: function(done) {
      done()
    }
  }
};