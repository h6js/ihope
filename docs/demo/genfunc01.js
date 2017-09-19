var I = require('../../src/ihope.js');

I.do('This is generator function test case:', function*(I){
  var zero = Date.now();
  var delta = Date.now() - zero;
  I.hope(delta).is.equal(0);
  yield I.delay(1000);
  delta = Date.now() - zero;
  I.hope(delta>1000).is.ok;
});