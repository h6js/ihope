I.do('I.hope.Promise :', function (I) {
  I.hope({}).is.not.Promise;
  I.hope(Promise.resolve()).is.Promise;
  I.hope((async function () { }())).is.Promise;

  I.sum();
});