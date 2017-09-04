I.do('I.hope.a.WeakMap :', function (I) {
  I.hope().is.a.WeakMap;
  I.hope(null).is.a.WeakMap;
  I.hope(true).is.a.WeakMap;
  I.hope(123).is.a.WeakMap;
  I.hope('abc').is.a.WeakMap;
  I.hope(Symbol()).is.a.WeakMap;
  I.hope({}).is.a.WeakMap;
  I.hope(function () { }).is.a.WeakMap;
  I.hope(new Boolean).is.a.WeakMap;
  I.hope(new Number).is.a.WeakMap;
  I.hope(new String).is.a.WeakMap;
  I.hope([]).is.a.WeakMap;
  I.hope(/ /).is.a.WeakMap;
  I.hope(new Date).is.a.WeakMap;
  I.hope(new Error).is.a.WeakMap;
  I.hope(new Set).is.a.WeakMap;
  I.hope(new WeakSet).is.a.WeakMap;
  I.hope(new Map).is.a.WeakMap;
  I.hope(new WeakMap).is.not.a.WeakMap;
  (function () {
    I.hope(arguments).is.a.WeakMap;
  })();

  I.sum();
});