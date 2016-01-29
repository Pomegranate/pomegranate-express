/**
 * @file 404
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Bundled 404 handler middleware
 * @module 404
 */

module.exports = function(req, res, next){
  res.status(404)
  res.json({error: 'Not found'})
}