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
  require('./plugins/PreMiddleware'),

  //layer router
  //require('./plugins/ExpressRouter'),
  require('pomegranate-express-route-directory'),

  //layer post_router
  require('./plugins/PostMiddleware'),
  //layer server

  //require('./plugins/ExpressLauncher')
  require('pomegranate-express-server')
]
