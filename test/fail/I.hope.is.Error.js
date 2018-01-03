I.do('I.hope().is.Error :', function (I) {
  I.hope().is.Error;
  I.hope(null).is.Error;
  I.hope(true).is.Error;
  I.hope(123).is.Error;
  I.hope('abc').is.Error;
  I.hope(Symbol()).is.Error;
  I.hope({}).is.Error;
  I.hope(function () { }).is.Error;
  I.hope(new Boolean).is.Error;
  I.hope(new Number).is.Error;
  I.hope(new String).is.Error;
  I.hope([]).is.Error;
  I.hope(/ /).is.Error;
  I.hope(new Date).is.Error;
  I.hope(new Error).is.not.Error;
  I.hope(new TypeError).is.not.Error;
  I.hope(new Set).is.Error;
  I.hope(new WeakSet).is.Error;
  I.hope(new Map).is.Error;
  I.hope(new WeakMap).is.Error;
  (function () {
    I.hope(arguments).is.Error;
  })();


});