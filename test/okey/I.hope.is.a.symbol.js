I.do('I.hope.is.a.symbol :', function (I) {
  I.hope().is.not.a.symbol;
  I.hope(null).is.not.a.symbol;
  I.hope(false).is.not.a.symbol;
  I.hope(true).is.not.a.symbol;
  I.hope(123).is.not.a.symbol;
  I.hope('abc').is.not.a.symbol;
  I.hope(Symbol()).is.a.symbol;
  I.hope({}).is.not.a.symbol;
  I.hope(function () { }).is.not.a.symbol;

  I.sum();
});

