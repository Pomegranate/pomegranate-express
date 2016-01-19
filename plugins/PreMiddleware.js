/**
 * @file PreMiddleware
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

"use strict";
var _ = require('lodash');
/**
 *
 * @module PreMiddleware
 */

module.exports = {
  metadata: {
    name: 'ExpressPreRouter',
    layer: 'preRouter'
  },
  plugin: {
    load: function(inject, loaded){
      inject(function(Express, Middleware){
        _.each(Middleware, function(mw){
          Express.use(mw)
        })
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