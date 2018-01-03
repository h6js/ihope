I.do('I.hope.a.RegExp :', function (I) {
  I.hope().is.not.a.RegExp;
  I.hope(null).is.not.a.RegExp;
  I.hope(true).is.not.a.RegExp;
  I.hope(123).is.not.a.RegExp;
  I.hope('abc').is.not.a.RegExp;
  I.hope(Symbol()).is.not.a.RegExp;
  I.hope({}).is.not.a.RegExp;
  I.hope(function () { }).is.not.a.RegExp;
  I.hope(new Boolean).is.not.a.RegExp;
  I.hope(new Number).is.not.a.RegExp;
  I.hope(new String).is.not.a.RegExp;
  I.hope([]).is.not.a.RegExp;
  I.hope(/ /).is.a.RegExp;
  I.hope(new Date).is.not.a.RegExp;
  I.hope(new Error).is.not.a.RegExp;
  I.hope(new Set).is.not.a.RegExp;
  I.hope(new WeakSet).is.not.a.RegExp;
  I.hope(new Map).is.not.a.RegExp;
  I.hope(new WeakMap).is.not.a.RegExp;
  (function () {
    I.hope(arguments).is.not.a.RegExp;
  })();


});