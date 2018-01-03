I.do('I.hope.is.a.symbol :', function (I) {
  I.hope().is.a.symbol;
  I.hope(null).is.a.symbol;
  I.hope(false).is.a.symbol;
  I.hope(true).is.a.symbol;
  I.hope(123).is.a.symbol;
  I.hope('abc').is.a.symbol;
  I.hope(Symbol()).is.not.a.symbol;
  I.hope({}).is.a.symbol;
  I.hope(function () { }).is.a.symbol;


});

