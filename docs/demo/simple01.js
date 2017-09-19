I.do('Test Hello World', function (I) {
  I.do('Test Hello', function (I) {
    var hello = 'hello';
    I.hope(hello).equal('hello');
  });
  I.do('Test World', function (I) {
    var world = 'world';
    I.hope(world).is.string;
  });
  I.sum();
});