I.do('I.hope.a.Set :', function (I) {
  I.hope().is.a.Set;
  I.hope(null).is.a.Set;
  I.hope(true).is.a.Set;
  I.hope(123).is.a.Set;
  I.hope('abc').is.a.Set;
  I.hope(Symbol()).is.a.Set;
  I.hope({}).is.a.Set;
  I.hope(function () { }).is.a.Set;
  I.hope(new Boolean).is.a.Set;
  I.hope(new Number).is.a.Set;
  I.hope(new String).is.a.Set;
  I.hope([]).is.a.Set;
  I.hope(/ /).is.a.Set;
  I.hope(new Date).is.a.Set;
  I.hope(new Error).is.a.Set;
  I.hope(new Set).is.not.a.Set;
  I.hope(new WeakSet).is.a.Set;
  I.hope(new Map).is.a.Set;
  I.hope(new WeakMap).is.a.Set;
  (function () {
    I.hope(arguments).is.a.Set;
  })();

  I.sum();
});