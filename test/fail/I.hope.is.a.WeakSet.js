I.do('I.hope.a.WeakSet :', function (I) {
  I.hope().is.a.WeakSet;
  I.hope(null).is.a.WeakSet;
  I.hope(true).is.a.WeakSet;
  I.hope(123).is.a.WeakSet;
  I.hope('abc').is.a.WeakSet;
  I.hope(Symbol()).is.a.WeakSet;
  I.hope({}).is.a.WeakSet;
  I.hope(function () { }).is.a.WeakSet;
  I.hope(new Boolean).is.a.WeakSet;
  I.hope(new Number).is.a.WeakSet;
  I.hope(new String).is.a.WeakSet;
  I.hope([]).is.a.WeakSet;
  I.hope(/ /).is.a.WeakSet;
  I.hope(new Date).is.a.WeakSet;
  I.hope(new Error).is.a.WeakSet;
  I.hope(new Set).is.a.WeakSet;
  I.hope(new WeakSet).is.not.a.WeakSet;
  I.hope(new Map).is.a.WeakSet;
  I.hope(new WeakMap).is.a.WeakSet;
  (function () {
    I.hope(arguments).is.a.WeakSet;
  })();

  I.sum();
});