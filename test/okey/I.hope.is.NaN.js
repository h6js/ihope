I.do('I.hope.NaN :', function (I) {
  I.hope(NaN).is.NaN;

  I.hope().is.not.NaN;
  I.hope(null).is.not.NaN;
  I.hope(false).is.not.NaN;
  I.hope(true).is.not.NaN;
  I.hope(0).is.not.NaN;
  I.hope(123).is.not.NaN;
  I.hope('').is.not.NaN;
  I.hope('abc').is.not.NaN;
  I.hope(Symbol()).is.not.NaN;
  I.hope({}).is.not.NaN;

  I.sum();
});
