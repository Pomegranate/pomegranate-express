/**
 * @file ExpressApplication
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-express
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var tap = require('tap');
var PluginHarness = require('../harness/Pomegranate-plugin-harness');
var ExpressApplication = require('../../plugins/ExpressApplication');

tap.test('Valid Plugin', function(t) {
  t.plan(1)
  var instrument = PluginHarness(ExpressApplication);
  t.ok(instrument.validPlugin, 'Plugin under test is valid.')
})