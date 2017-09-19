I.do('I.do() for callback :', function (I) {
  I.do('callback in time.', function $(done){
    setTimeout(function(){
      done();
    }, 500);
    setTimeout(function(){
      done(new Error('time out!'));
    }, 10000);
  });

  I.do('callback and goon.', function $(done){
    setTimeout(function(text){
      I.do('on success:', function(I){
        I.hope(text).is.equal('hello');
        I.sum();
      });
    }, 50, 'hello');

    setTimeout(function(){
      done(new Error('time out!'));
    }, 100);
  });

  I.sum();
});

I.do('I.do() for promise :', function(I) {
  I.do('promis chian', function $(done) {
    Promise.resolve()
    .then(function () {
      done();
    })
    .catch(function(err){
      done(err);
    });
  });

  I.do('promis then test', function $(done) {
    Promise.resolve('hello promise')
    .then(function (arg) {
      I.do('then test again:', function(I){
        I.hope(arg).is.equal('hello promise');
        I.sum();
      });
    })
    .catch(function(err){
      done(err);
    });
  });

  I.sum();
});

