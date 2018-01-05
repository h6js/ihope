I.do('I.get():', function(I){
  var hello = I.get('test/data/hello.txt');
  I.hope(hello).is.equal('hello');
});