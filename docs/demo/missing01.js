var I = require('../../src/ihope.js');

I.do('Missing asserts:', function(I){
  I.hope(1).is.equal;
  I.hope({}).has.not;
});