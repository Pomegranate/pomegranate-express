/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 *
 * @module index
 */

module.exports = [
  //layer core

  //require('./plugins/ExpressApplication'),
  require('pomegranate-express-application'),

  require('./plugins/StaticFiles'),
  require('./plugins/ErrorMiddleware'),
  require('./plugins/BundledMiddleware'),

  //layer pre_router
  require('pomegranate-express-preroute-middleware'),

  //layer router
  //require('./plugins/ExpressRouter'),
  require('pomegranate-express-route-directory'),

  //layer post_router
  require('pomegranate-express-postroute-middleware'),

  //layer server
  require('pomegranate-express-server')
]
