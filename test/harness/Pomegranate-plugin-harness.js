/**
 * @file Pomegranate-plugin-harness
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

var assert = require('assert');

/**
 *
 * @module Pomegranate-plugin-harness
 */

module.exports = function(plugin){

  var options =  testOptions(plugin);
  var metadata = testMetadata(plugin);
  var hooks = testHooks(plugin);

  return {
    validPlugin: true,
    result:{
      options: testOptions(plugin),
      metadata: testMetadata(plugin),
      hooks: testHooks(plugin)
    }
  }

}

function testOptions(plugin){
  if(plugin.options){
    return {valid: true}
  }
}

function testMetadata(plugin){
  if(plugin.metadata){
    return {valid: true}
  }

  return {valid: false, error: new Error('Plugin missing metadata')}
}

function testHooks(plugin){
  if(plugin.plugin){
    return {valid: true}
  }
  return {valid: false, error: new Error('Plugin missing hooks')}
}

function testErrors(plugin){
  if(plugin.errors){
    return {valid: true}
  }
}