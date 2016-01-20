/**
 * @file ExpressApplication
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var Express = require('express');
/**
 * Provides the Express App, Express Router Factory and Middleware object.
 * @module Application
 * @injector {Dynamic} Adds a dynamic number of objects.
 * @options {Object} none
 * @injects {Service} Express Configurable instance of Express.
 * @injects {Factory} Router Provides instances of Express.Router() to define routes on.
 * @injects {Merge} Middleware An object spanning all of the middleware in a project.
 *
 */
module.exports = {
  metadata: {
    name: 'ExpressApp',
    layer: 'core',
    type: 'dynamic'
  },
  plugin: {
    load: function(inject, loaded) {
      var App = Express()
      var Deps = [
        {param: 'Express', load: App},
        {param: 'Router', load: Express.Router, type: 'factory'},
        {param: 'Middleware', load: {}, type: 'merge'}
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