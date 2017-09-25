I.do('I.get():', function(I){
  var hello = I.get('../data/hello.txt');
  I.hope(hello).is.equal('hello');
});