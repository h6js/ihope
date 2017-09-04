I.do('I.hope().is.an.Error :', function (I) {
  I.hope().is.an.Error;
  I.hope(null).is.an.Error;
  I.hope(true).is.an.Error;
  I.hope(123).is.an.Error;
  I.hope('abc').is.an.Error;
  I.hope(Symbol()).is.an.Error;
  I.hope({}).is.an.Error;
  I.hope(function () { }).is.an.Error;
  I.hope(new Boolean).is.an.Error;
  I.hope(new Number).is.an.Error;
  I.hope(new String).is.an.Error;
  I.hope([]).is.an.Error;
  I.hope(/ /).is.an.Error;
  I.hope(new Date).is.an.Error;
  I.hope(new Error).is.not.an.Error;
  I.hope(new TypeError).is.not.an.Error;
  I.hope(new Set).is.an.Error;
  I.hope(new WeakSet).is.an.Error;
  I.hope(new Map).is.an.Error;
  I.hope(new WeakMap).is.an.Error;
  (function () {
    I.hope(arguments).is.an.Error;
  })();

  I.sum();
});