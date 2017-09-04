I.do('I.hope.finite :', function (I) {
  I.hope(0).is.finite;
  I.hope(123).is.finite;

  I.hope().is.not.finite;
  I.hope(null).is.not.finite;
  I.hope(false).is.not.finite;
  I.hope(true).is.not.finite;
  I.hope(NaN).is.not.finite;
  I.hope(Number.POSITIVE_INFINITY).is.not.finite;
  I.hope(Number.NEGATIVE_INFINITY).is.not.finite;
  I.hope('').is.not.finite;
  I.hope('abc').is.not.finite;
  I.hope(Symbol()).is.not.finite;
  I.hope({}).is.not.finite;

  I.sum();
});
