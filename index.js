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
  require('./plugins/ExpressApplication'),
  require('./plugins/ExpressBundledMiddleware'),

  //layer pre_router
  require('./plugins/PreMiddleware'),
  //layer router
  require('./plugins/ExpressRouter'),
  //layer post_router
  require('./plugins/PostMiddleware'),
  //layer server
  require('./plugins/ExpressLauncher')
]
