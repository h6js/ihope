I.do('I.hope.ok :', function (I) {
  I.hope(true).is.ok;
  I.hope(123).is.ok;
  I.hope('abc').is.ok;
  I.hope(Symbol()).is.ok;
  I.hope({}).is.ok;

  I.hope().is.not.ok;
  I.hope(null).is.not.ok;
  I.hope(false).is.not.ok;
  I.hope(0).is.not.ok;
  I.hope(NaN).is.not.ok;
  I.hope('').is.not.ok;


});
