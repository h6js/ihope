I.do('I.hope.a.Map :', function (I) {
  I.hope().is.a.Map;
  I.hope(null).is.a.Map;
  I.hope(true).is.a.Map;
  I.hope(123).is.a.Map;
  I.hope('abc').is.a.Map;
  I.hope(Symbol()).is.a.Map;
  I.hope({}).is.a.Map;
  I.hope(function () { }).is.a.Map;
  I.hope(new Boolean).is.a.Map;
  I.hope(new Number).is.a.Map;
  I.hope(new String).is.a.Map;
  I.hope([]).is.a.Map;
  I.hope(/ /).is.a.Map;
  I.hope(new Date).is.a.Map;
  I.hope(new Error).is.a.Map;
  I.hope(new Set).is.a.Map;
  I.hope(new WeakSet).is.a.Map;
  I.hope(new Map).is.not.a.Map;
  I.hope(new WeakMap).is.a.Map;
  (function () {
    I.hope(arguments).is.a.Map;
  })();


});