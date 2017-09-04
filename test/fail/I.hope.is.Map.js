I.do('I.hope.Map :', function (I) {
  I.hope().is.Map;
  I.hope(null).is.Map;
  I.hope(true).is.Map;
  I.hope(123).is.Map;
  I.hope('abc').is.Map;
  I.hope(Symbol()).is.Map;
  I.hope({}).is.Map;
  I.hope(function () { }).is.Map;
  I.hope(new Boolean).is.Map;
  I.hope(new Number).is.Map;
  I.hope(new String).is.Map;
  I.hope([]).is.Map;
  I.hope(/ /).is.Map;
  I.hope(new Date).is.Map;
  I.hope(new Error).is.Map;
  I.hope(new Set).is.Map;
  I.hope(new WeakSet).is.Map;
  I.hope(new Map).is.not.Map;
  I.hope(new WeakMap).is.Map;
  (function () {
    I.hope(arguments).is.Map;
  })();

  I.sum();
});