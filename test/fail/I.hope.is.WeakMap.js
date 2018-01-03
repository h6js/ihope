I.do('I.hope.WeakMap :', function (I) {
  I.hope().is.WeakMap;
  I.hope(null).is.WeakMap;
  I.hope(true).is.WeakMap;
  I.hope(123).is.WeakMap;
  I.hope('abc').is.WeakMap;
  I.hope(Symbol()).is.WeakMap;
  I.hope({}).is.WeakMap;
  I.hope(function () { }).is.WeakMap;
  I.hope(new Boolean).is.WeakMap;
  I.hope(new Number).is.WeakMap;
  I.hope(new String).is.WeakMap;
  I.hope([]).is.WeakMap;
  I.hope(/ /).is.WeakMap;
  I.hope(new Date).is.WeakMap;
  I.hope(new Error).is.WeakMap;
  I.hope(new Set).is.WeakMap;
  I.hope(new WeakSet).is.WeakMap;
  I.hope(new Map).is.WeakMap;
  I.hope(new WeakMap).is.not.WeakMap;
  (function () {
    I.hope(arguments).is.WeakMap;
  })();


});