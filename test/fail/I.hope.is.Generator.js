I.do('I.hope().is.Generator :', function (I) {
  I.hope({}).is.Generator;
  I.hope(function* () { }()).is.not.Generator;

  I.sum();
});