/**
 * @file 500
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module 500
 */

exports['500'] = function(err, req, res, next){
  res.status(500)
  res.json({error: 'Something broke'})
}