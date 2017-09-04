I.do('I.hope.a.WeakMap :', function (I) {
  I.hope().is.not.a.WeakMap;
  I.hope(null).is.not.a.WeakMap;
  I.hope(true).is.not.a.WeakMap;
  I.hope(123).is.not.a.WeakMap;
  I.hope('abc').is.not.a.WeakMap;
  I.hope(Symbol()).is.not.a.WeakMap;
  I.hope({}).is.not.a.WeakMap;
  I.hope(function () { }).is.not.a.WeakMap;
  I.hope(new Boolean).is.not.a.WeakMap;
  I.hope(new Number).is.not.a.WeakMap;
  I.hope(new String).is.not.a.WeakMap;
  I.hope([]).is.not.a.WeakMap;
  I.hope(/ /).is.not.a.WeakMap;
  I.hope(new Date).is.not.a.WeakMap;
  I.hope(new Error).is.not.a.WeakMap;
  I.hope(new Set).is.not.a.WeakMap;
  I.hope(new WeakSet).is.not.a.WeakMap;
  I.hope(new Map).is.not.a.WeakMap;
  I.hope(new WeakMap).is.a.WeakMap;
  (function () {
    I.hope(arguments).is.not.a.WeakMap;
  })();

  I.sum();
});