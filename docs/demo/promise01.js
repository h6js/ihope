I.do('Promise test', function (I) {
  I.do('promise:', function $(done) {
    Promise.resolve()
      .then(function () {
        done();
      })
      .catch(function (err) {
        done(err);
      });
  });
});