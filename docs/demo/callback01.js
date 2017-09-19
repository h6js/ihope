var I = require('../../src/ihope.js');
var fs = require('fs');
I.do('Asynchronous read file', function (I) {
  I.do('It works?', function $(done) {
    fs.readFile('hello.txt', 'utf8', done);
  });
});