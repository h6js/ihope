I.do('I.do() for promise :', function (I, resolve) {
  Promise.resolve('hello promise')
    .then(function (arg) {
      I.hope(arg).is.equal('hello promise');
      I.sum();
      resolve();
    });
});

I.do('I.do() for callback :', function (I, done, fail) {
  setTimeout(function (arg) {
    I.hope(arg).is.equal('hello callback');
    I.sum();
    done();
  }, 50, 'hello callback');

  setTimeout(function () {
    fail("Timeout callback!");
  }, 100);
});

I.do('I.do() for wrapped callback :', function (I, onOkey, onFail) {
  setTimeout(onOkey(function (arg) {
    I.hope(arg).is.equal('hello wrapped callback');
    I.sum();
  }), 50, 'hello wrapped callback');

  setTimeout(onFail(function (err) {
    return "Timeout wrapped callback!";
  }), 100);
});