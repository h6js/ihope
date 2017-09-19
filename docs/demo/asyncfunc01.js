var I = require('../../src/ihope.js');

I.do('This is async function test case:', async function (I) {
  var zero = Date.now();
  var delta = Date.now() - zero;
  I.hope(delta).is.equal(0);
  await I.delay(1000);
  delta = Date.now() - zero;
  I.hope(delta > 1000).is.ok;
});