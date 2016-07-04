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

  require('pomegranate-express-application'),

  require('./plugins/StaticFiles'),

  require('./plugins/ErrorMiddleware'),

  require('./plugins/BundledMiddleware'),

  require('pomegranate-express-preroute-middleware'),

  require('pomegranate-express-route-directory'),

  require('pomegranate-express-postroute-middleware'),

  require('pomegranate-express-server')
]
