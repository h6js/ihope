I.do('I.hope.a.Generator :', function (I) {
  I.hope({}).is.not.a.Generator;
  I.hope(function* () { }()).is.a.Generator;

  I.sum();
});