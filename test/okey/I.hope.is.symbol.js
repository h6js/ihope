I.do('I.hope.is.symbol :', function (I) {
  I.hope().is.not.symbol;
  I.hope(null).is.not.symbol;
  I.hope(false).is.not.symbol;
  I.hope(true).is.not.symbol;
  I.hope(123).is.not.symbol;
  I.hope('abc').is.not.symbol;
  I.hope(Symbol()).is.symbol;
  I.hope({}).is.not.symbol;
  I.hope(function () { }).is.not.symbol;


});

