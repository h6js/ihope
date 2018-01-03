I.do('I.hope.undefined :', function (I) {
  var uninitialized_variable, initialized_variable = 123;
  I.hope().is.undefined;
  I.hope(uninitialized_variable).is.undefined;

  I.hope(null).is.not.undefined;
  I.hope(false).is.not.undefined;
  I.hope(true).is.not.undefined;
  I.hope(0).is.not.undefined;
  I.hope(NaN).is.not.undefined;
  I.hope(123).is.not.undefined;
  I.hope('').is.not.undefined;
  I.hope('abc').is.not.undefined;
  I.hope(Symbol()).is.not.undefined;
  I.hope({}).is.not.undefined;
  I.hope(function () { }).is.not.undefined;
  I.hope(initialized_variable).is.not.undefined;


});