I.do('I.hope.void :', function (I) {
  I.hope().is.void;
  I.hope(null).is.void;

  I.hope(false).is.not.void;
  I.hope(true).is.not.void;
  I.hope(0).is.not.void;
  I.hope(NaN).is.not.void;
  I.hope(123).is.not.void;
  I.hope('').is.not.void;
  I.hope('abc').is.not.void;
  I.hope(Symbol()).is.not.void;
  I.hope({}).is.not.void;
  I.hope(function () { }).is.not.void;


});
