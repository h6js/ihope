I.do('I.hope.ok :', function (I) {
  I.hope(true).is.not.ok;
  I.hope(123).is.not.ok;
  I.hope('abc').is.not.ok;
  I.hope(Symbol()).is.not.ok;
  I.hope({}).is.not.ok;

  I.hope().is.ok;
  I.hope(null).is.ok;
  I.hope(false).is.ok;
  I.hope(0).is.ok;
  I.hope(NaN).is.ok;
  I.hope('').is.ok;

  I.sum();
});
