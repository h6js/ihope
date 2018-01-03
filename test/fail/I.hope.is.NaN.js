I.do('I.hope.NaN :', function (I) {
  I.hope(NaN).is.not.NaN;

  I.hope().is.NaN;
  I.hope(null).is.NaN;
  I.hope(false).is.NaN;
  I.hope(true).is.NaN;
  I.hope(0).is.NaN;
  I.hope(123).is.NaN;
  I.hope('').is.NaN;
  I.hope('abc').is.NaN;
  I.hope(Symbol()).is.NaN;
  I.hope({}).is.NaN;


});
