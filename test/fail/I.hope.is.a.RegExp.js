I.do('I.hope.a.RegExp :', function (I) {
  I.hope().is.a.RegExp;
  I.hope(null).is.a.RegExp;
  I.hope(true).is.a.RegExp;
  I.hope(123).is.a.RegExp;
  I.hope('abc').is.a.RegExp;
  I.hope(Symbol()).is.a.RegExp;
  I.hope({}).is.a.RegExp;
  I.hope(function () { }).is.a.RegExp;
  I.hope(new Boolean).is.a.RegExp;
  I.hope(new Number).is.a.RegExp;
  I.hope(new String).is.a.RegExp;
  I.hope([]).is.a.RegExp;
  I.hope(/ /).is.not.a.RegExp;
  I.hope(new Date).is.a.RegExp;
  I.hope(new Error).is.a.RegExp;
  I.hope(new Set).is.a.RegExp;
  I.hope(new WeakSet).is.a.RegExp;
  I.hope(new Map).is.a.RegExp;
  I.hope(new WeakMap).is.a.RegExp;
  (function () {
    I.hope(arguments).is.a.RegExp;
  })();


});