/**
 * @file PostMiddleware
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 *
 * @module PostMiddleware
 */

module.exports = {
  metadata: {
    name: 'ExpressPostRouter',
    layer: 'postRouter'
  },
  plugin: {
    load: function(inject, loaded){
      inject(function(Express){
        Express.use(function(req, res, next){
          res.status(404)
          res.json({error: 'Not found'})
        })
        Express.use(function(err, req, res, next){
          res.status(500)
          res.json({error: 'Something broke'})
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