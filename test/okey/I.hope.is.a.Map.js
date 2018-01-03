I.do('I.hope.a.Map :', function (I) {
  I.hope().is.not.a.Map;
  I.hope(null).is.not.a.Map;
  I.hope(true).is.not.a.Map;
  I.hope(123).is.not.a.Map;
  I.hope('abc').is.not.a.Map;
  I.hope(Symbol()).is.not.a.Map;
  I.hope({}).is.not.a.Map;
  I.hope(function () { }).is.not.a.Map;
  I.hope(new Boolean).is.not.a.Map;
  I.hope(new Number).is.not.a.Map;
  I.hope(new String).is.not.a.Map;
  I.hope([]).is.not.a.Map;
  I.hope(/ /).is.not.a.Map;
  I.hope(new Date).is.not.a.Map;
  I.hope(new Error).is.not.a.Map;
  I.hope(new Set).is.not.a.Map;
  I.hope(new WeakSet).is.not.a.Map;
  I.hope(new Map).is.a.Map;
  I.hope(new WeakMap).is.not.a.Map;
  (function () {
    I.hope(arguments).is.not.a.Map;
  })();


});