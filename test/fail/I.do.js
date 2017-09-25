I.do('I.do() for callback :', function (I) {
  I.do('callback in time.', function $(done){
    setTimeout(function(){
      done();
    }, 100);
    setTimeout(function(){
      done(new Error('time out!'));
    }, 50);
  });

  I.do('callback and goon.', function $(done){
    setTimeout(function(text){
      I.do('on success:', function(I){
        I.hope(text).is.equal('hello');
        I.sum();
      });
    }, 100, 'hello');

    setTimeout(function(){
      done(new Error('time out!!'));
    }, 50);
  });

  I.sum();
});

I.do('I.do() for promise :', function(I) {
  I.do('promis chian', function $(done) {
    Promise.resolve()
    .then(function () {
      done(Error('promise error.'));
    })
    .catch(function(err){
      done(err);
    });
  });

  I.do('promis then test', function $(done) {
    Promise.resolve('hello promise')
    .then(function (arg) {
      done(Error('promise error.'));
      I.do('then test again:', function(I){
        I.hope(arg).is.not.equal('hello promise');
        I.sum();
      });
    })
    .catch(function(err){
      done(err);
    });
  });

  I.sum();
});

