I.do('I.hope.WeakMap :', function (I) {
  I.hope().is.not.WeakMap;
  I.hope(null).is.not.WeakMap;
  I.hope(true).is.not.WeakMap;
  I.hope(123).is.not.WeakMap;
  I.hope('abc').is.not.WeakMap;
  I.hope(Symbol()).is.not.WeakMap;
  I.hope({}).is.not.WeakMap;
  I.hope(function () { }).is.not.WeakMap;
  I.hope(new Boolean).is.not.WeakMap;
  I.hope(new Number).is.not.WeakMap;
  I.hope(new String).is.not.WeakMap;
  I.hope([]).is.not.WeakMap;
  I.hope(/ /).is.not.WeakMap;
  I.hope(new Date).is.not.WeakMap;
  I.hope(new Error).is.not.WeakMap;
  I.hope(new Set).is.not.WeakMap;
  I.hope(new WeakSet).is.not.WeakMap;
  I.hope(new Map).is.not.WeakMap;
  I.hope(new WeakMap).is.WeakMap;
  (function () {
    I.hope(arguments).is.not.WeakMap;
  })();

  I.sum();
});