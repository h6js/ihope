I.do('I.hope().is.Error :', function (I) {
  I.hope().is.not.Error;
  I.hope(null).is.not.Error;
  I.hope(true).is.not.Error;
  I.hope(123).is.not.Error;
  I.hope('abc').is.not.Error;
  I.hope(Symbol()).is.not.Error;
  I.hope({}).is.not.Error;
  I.hope(function () { }).is.not.Error;
  I.hope(new Boolean).is.not.Error;
  I.hope(new Number).is.not.Error;
  I.hope(new String).is.not.Error;
  I.hope([]).is.not.Error;
  I.hope(/ /).is.not.Error;
  I.hope(new Date).is.not.Error;
  I.hope(new Error).is.Error;
  I.hope(new TypeError).is.Error;
  I.hope(new Set).is.not.Error;
  I.hope(new WeakSet).is.not.Error;
  I.hope(new Map).is.not.Error;
  I.hope(new WeakMap).is.not.Error;
  (function () {
    I.hope(arguments).is.not.Error;
  })();

  I.sum();
});