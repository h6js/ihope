I.do('I.do() for promise :', function (I, resolve, reject) {
  Promise.resolve('hello promise')
    .then(function (arg) {
      throw Error('then() throw error.');
    })
    .catch(reject);
});

I.do('I.do() for callback :', function (I, done, fail) {
  setTimeout(function (arg) {
    I.hope(arg).is.equal('hello callback');
    done();
  }, 100, 'hello callback');

  setTimeout(function () {
    fail("Timeout callback!");
  }, 50);
});

I.do('I.do() for wrapped callback :', function (I, onOkey, onFail) {
  setTimeout(onOkey(function (arg) {
    I.hope(arg).is.equal('hello wrapped callback');
  }), 100, 'hello wrapped callback');

  setTimeout(onFail(function (err) {
    return "Timeout warapped callback!";
  }), 50);
});