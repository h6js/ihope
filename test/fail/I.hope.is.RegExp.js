I.do('I.hope.RegExp :', function (I) {
  I.hope().is.RegExp;
  I.hope(null).is.RegExp;
  I.hope(true).is.RegExp;
  I.hope(123).is.RegExp;
  I.hope('abc').is.RegExp;
  I.hope(Symbol()).is.RegExp;
  I.hope({}).is.RegExp;
  I.hope(function () { }).is.RegExp;
  I.hope(new Boolean).is.RegExp;
  I.hope(new Number).is.RegExp;
  I.hope(new String).is.RegExp;
  I.hope([]).is.RegExp;
  I.hope(/ /).is.not.RegExp;
  I.hope(new Date).is.RegExp;
  I.hope(new Error).is.RegExp;
  I.hope(new Set).is.RegExp;
  I.hope(new WeakSet).is.RegExp;
  I.hope(new Map).is.RegExp;
  I.hope(new WeakMap).is.RegExp;
  (function () {
    I.hope(arguments).is.RegExp;
  })();

  I.sum();
});