/**
 * @file BundledMiddleware
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var url = require('url')
var morgan = require('morgan');
var logCommon = morgan.compile(morgan.common);
var compression = require('compression');
var responseTime = require('response-time');

/**
 *
 * @module BundledMiddleware
 */

exports.options = {
  skipLogging: ['/health']
}

exports.metadata = {
  name: 'BundledMiddleware',
  type: 'merge',
  param: 'Middleware',
  depends: ['ExpressCore']
}

exports.plugin = {
  load: function(inject, loaded) {
    var self = this;
    var bareLogger = inject(function(Logger){ return Logger });
    var Bundled = {
      logger: morgan(function(t, req, res) {
        var resObj = {
          'remote-addr': t['remote-addr'](req, res),
          'date': t['date'](req, res),
          'method': t['method'](req, res),
          'url': t['url'](req, res),
          'status': t['status'](req, res),
          'content-length': res['content-length'],
          'response-time': t['response-time'](req, res) + 'ms'
        };
        bareLogger.log(logCommon(morgan, req, res));
      }, findSkippedLogging(self.options.skipLogging)),
      compression: compression(),
      responseTime: responseTime()
    }
    loaded(null, Bundled)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}

function findSkippedLogging(skipPaths){

  var skipfn = function(req, res){
    var pathname = url.parse(req.originalUrl).pathname
    return skipPaths.reduce(function(oldVal, newVal){
      if(newVal === pathname) return true
      return oldVal
    }, false)
  }

  return {
    skip: skipPaths && skipPaths.length >= 1 ? skipfn : false
  }
}
