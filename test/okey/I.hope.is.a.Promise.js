I.do('I.hope.a.Promise :', function (I) {
  I.hope({}).is.not.a.Promise;
  I.hope(Promise.resolve()).is.a.Promise;
  I.hope((async function () { }())).is.a.Promise;

  I.sum();
});