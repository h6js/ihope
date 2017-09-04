I.do('I.hope.null :', function (I) {
  I.hope(null).is.not.null;

  I.hope().is.null;
  I.hope(false).is.null;
  I.hope(true).is.null;
  I.hope(0).is.null;
  I.hope(NaN).is.null;
  I.hope(123).is.null;
  I.hope('').is.null;
  I.hope('abc').is.null;
  I.hope(Symbol()).is.null;
  I.hope({}).is.null;
  I.hope(function () { }).is.null;

  I.sum();
});
