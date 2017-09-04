I.do('I.hope().is.Generator :', function (I) {
  I.hope({}).is.not.Generator;
  I.hope(function* () { }()).is.Generator;

  I.sum();
});