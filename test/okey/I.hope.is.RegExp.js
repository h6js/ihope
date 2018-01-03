I.do('I.hope.RegExp :', function (I) {
  I.hope().is.not.RegExp;
  I.hope(null).is.not.RegExp;
  I.hope(true).is.not.RegExp;
  I.hope(123).is.not.RegExp;
  I.hope('abc').is.not.RegExp;
  I.hope(Symbol()).is.not.RegExp;
  I.hope({}).is.not.RegExp;
  I.hope(function () { }).is.not.RegExp;
  I.hope(new Boolean).is.not.RegExp;
  I.hope(new Number).is.not.RegExp;
  I.hope(new String).is.not.RegExp;
  I.hope([]).is.not.RegExp;
  I.hope(/ /).is.RegExp;
  I.hope(new Date).is.not.RegExp;
  I.hope(new Error).is.not.RegExp;
  I.hope(new Set).is.not.RegExp;
  I.hope(new WeakSet).is.not.RegExp;
  I.hope(new Map).is.not.RegExp;
  I.hope(new WeakMap).is.not.RegExp;
  (function () {
    I.hope(arguments).is.not.RegExp;
  })();


});