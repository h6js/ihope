I.do('I.hope.void :', function (I) {
  I.hope().is.not.void;
  I.hope(null).is.not.void;

  I.hope(false).is.void;
  I.hope(true).is.void;
  I.hope(0).is.void;
  I.hope(NaN).is.void;
  I.hope(123).is.void;
  I.hope('').is.void;
  I.hope('abc').is.void;
  I.hope(Symbol()).is.void;
  I.hope({}).is.void;
  I.hope(function () { }).is.void;


});
