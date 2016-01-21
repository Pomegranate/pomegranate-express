/**
 * @file PreMiddleware
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

"use strict";
var _ = require('lodash');

/**
 * Configures the Express application and mounts all pre-route middleware.
 * @module PreMiddleware
 * @injector {None} Adds nothing to the injector.
 * @property {Object} options Plugin Options
 * @property {Array} options.order Mount order of middleware functions.
 *
 */

module.exports = {
  options: {
    order: ['simple', 'passport']
  },
  metadata: {
    name: 'ExpressPreRouter',
    layer: 'pre_router',
    type: 'none'
  },
  plugin: {
    load: function(inject, loaded){
      var self = this;
      inject(function(Express, Middleware){
        _.chain(self.options.order)
          .map(function(p){
            return {fn: Middleware[p], name: p}
          })
          .filter(function(mw){
            return _.isFunction(mw.fn);
          })
          .each(function(vmw){
            self.Logger.log(vmw.name + ' Middleware added before routes.');
            Express.use(vmw.fn)
          })
          .value()

        Express.use(function(req, res, next){
          console.log('derp');
          next()
        })
      })
      loaded(null, null)
    },
    start: function(done){
      done()
    },
    stop: function(done){
      done()
    }
  }
}