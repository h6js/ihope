I.do('I.hope.null :', function (I) {
  I.hope(null).is.null;

  I.hope().is.not.null;
  I.hope(false).is.not.null;
  I.hope(true).is.not.null;
  I.hope(0).is.not.null;
  I.hope(NaN).is.not.null;
  I.hope(123).is.not.null;
  I.hope('').is.not.null;
  I.hope('abc').is.not.null;
  I.hope(Symbol()).is.not.null;
  I.hope({}).is.not.null;
  I.hope(function () { }).is.not.null;


});
