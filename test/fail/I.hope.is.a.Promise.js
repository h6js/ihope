I.do('I.hope.a.Promise :', function (I) {
  I.hope({}).is.a.Promise;
  I.hope(Promise.resolve()).is.not.a.Promise;
  I.hope((async function () { }())).is.not.a.Promise;


});