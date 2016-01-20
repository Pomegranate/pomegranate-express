/**
 * @file ExpressLauncher
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Configures the Express application and mounts all pre-route middleware.
 * @module Launcher
 * @injector {None} Adds nothing to the injector.
 * @options {Object} options
 * @options {Number} options.port Port to bind server to. Default: 8080
 * @options {String} options.address Address to bind server to. Default: localhost
 *
 */

module.exports = {
  options: {
    port: 8080,
    address: 'localhost'
  },
  metadata: {
    name: 'ExpressLauncher',
    layer: 'server',
    type: 'none'
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
      var self = this;
      this.server = this.app.listen(this.options.port, function(){

        self.Logger.log('Started express server on port ' + self.options.port)
        done()
      });
    },
    stop: function(done) {
      this.server.close();
      done()
    }
  }
}