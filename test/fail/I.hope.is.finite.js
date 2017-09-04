I.do('I.hope.finite :', function (I) {
  I.hope(0).is.not.finite;
  I.hope(123).is.not.finite;

  I.hope().is.finite;
  I.hope(null).is.finite;
  I.hope(false).is.finite;
  I.hope(true).is.finite;
  I.hope(NaN).is.finite;
  I.hope(Number.POSITIVE_INFINITY).is.finite;
  I.hope(Number.NEGATIVE_INFINITY).is.finite;
  I.hope('').is.finite;
  I.hope('abc').is.finite;
  I.hope(Symbol()).is.finite;
  I.hope({}).is.finite;

  I.sum();
});
