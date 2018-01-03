I.do('I.hope.Promise :', function (I) {
  I.hope({}).is.Promise;
  I.hope(Promise.resolve()).is.not.Promise;
  I.hope((async function () { }())).is.not.Promise;


});