I.do('I.hope.Map :', function (I) {
  I.hope().is.not.Map;
  I.hope(null).is.not.Map;
  I.hope(true).is.not.Map;
  I.hope(123).is.not.Map;
  I.hope('abc').is.not.Map;
  I.hope(Symbol()).is.not.Map;
  I.hope({}).is.not.Map;
  I.hope(function () { }).is.not.Map;
  I.hope(new Boolean).is.not.Map;
  I.hope(new Number).is.not.Map;
  I.hope(new String).is.not.Map;
  I.hope([]).is.not.Map;
  I.hope(/ /).is.not.Map;
  I.hope(new Date).is.not.Map;
  I.hope(new Error).is.not.Map;
  I.hope(new Set).is.not.Map;
  I.hope(new WeakSet).is.not.Map;
  I.hope(new Map).is.Map;
  I.hope(new WeakMap).is.not.Map;
  (function () {
    I.hope(arguments).is.not.Map;
  })();

  I.sum();
});