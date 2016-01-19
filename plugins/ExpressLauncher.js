/**
 * @file ExpressLauncher
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 *
 * @module ExpressLauncher
 */

module.exports = {
  metadata: {
    name: 'ExpressLauncher',
    layer: 'server'
  },
  plugin: {
    load: function(inject, loaded) {
      var self = this;
      inject(function(Express){
        self.app = Express
      })
      loaded(null, null)
    },
    start: function(done) {
      this.server = this.app.listen(8100, function(){
        done()
      });
    },
    stop: function(done) {
      this.server.close();
      done()
    }
  }
}