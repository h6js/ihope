I.do('I.hope.undefined :', function (I) {
  var uninitialized_variable, initialized_variable = 123;
  I.hope().is.not.undefined;
  I.hope(uninitialized_variable).is.not.undefined;

  I.hope(null).is.undefined;
  I.hope(false).is.undefined;
  I.hope(true).is.undefined;
  I.hope(0).is.undefined;
  I.hope(NaN).is.undefined;
  I.hope(123).is.undefined;
  I.hope('').is.undefined;
  I.hope('abc').is.undefined;
  I.hope(Symbol()).is.undefined;
  I.hope({}).is.undefined;
  I.hope(function () { }).is.undefined;
  I.hope(initialized_variable).is.undefined;

  I.sum();
});