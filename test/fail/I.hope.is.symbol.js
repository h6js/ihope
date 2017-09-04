I.do('I.hope.is.symbol :', function (I) {
  I.hope().is.symbol;
  I.hope(null).is.symbol;
  I.hope(false).is.symbol;
  I.hope(true).is.symbol;
  I.hope(123).is.symbol;
  I.hope('abc').is.symbol;
  I.hope(Symbol()).is.not.symbol;
  I.hope({}).is.symbol;
  I.hope(function () { }).is.symbol;

  I.sum();
});

