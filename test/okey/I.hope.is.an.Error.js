I.do('I.hope().is.an.Error :', function (I) {
  I.hope().is.not.an.Error;
  I.hope(null).is.not.an.Error;
  I.hope(true).is.not.an.Error;
  I.hope(123).is.not.an.Error;
  I.hope('abc').is.not.an.Error;
  I.hope(Symbol()).is.not.an.Error;
  I.hope({}).is.not.an.Error;
  I.hope(function () { }).is.not.an.Error;
  I.hope(new Boolean).is.not.an.Error;
  I.hope(new Number).is.not.an.Error;
  I.hope(new String).is.not.an.Error;
  I.hope([]).is.not.an.Error;
  I.hope(/ /).is.not.an.Error;
  I.hope(new Date).is.not.an.Error;
  I.hope(new Error).is.an.Error;
  I.hope(new TypeError).is.an.Error;
  I.hope(new Set).is.not.an.Error;
  I.hope(new WeakSet).is.not.an.Error;
  I.hope(new Map).is.not.an.Error;
  I.hope(new WeakMap).is.not.an.Error;
  (function () {
    I.hope(arguments).is.not.an.Error;
  })();


});