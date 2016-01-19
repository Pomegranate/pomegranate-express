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
  require('./plugins/ExpressApplication'),
  require('./plugins/PreMiddleware'),
  require('./plugins/ExpressRouter'),
  require('./plugins/PostMiddleware'),
  require('./plugins/ExpressLauncher')
]
