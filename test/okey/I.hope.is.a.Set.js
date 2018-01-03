I.do('I.hope.a.Set :', function (I) {
  I.hope().is.not.a.Set;
  I.hope(null).is.not.a.Set;
  I.hope(true).is.not.a.Set;
  I.hope(123).is.not.a.Set;
  I.hope('abc').is.not.a.Set;
  I.hope(Symbol()).is.not.a.Set;
  I.hope({}).is.not.a.Set;
  I.hope(function () { }).is.not.a.Set;
  I.hope(new Boolean).is.not.a.Set;
  I.hope(new Number).is.not.a.Set;
  I.hope(new String).is.not.a.Set;
  I.hope([]).is.not.a.Set;
  I.hope(/ /).is.not.a.Set;
  I.hope(new Date).is.not.a.Set;
  I.hope(new Error).is.not.a.Set;
  I.hope(new Set).is.a.Set;
  I.hope(new WeakSet).is.not.a.Set;
  I.hope(new Map).is.not.a.Set;
  I.hope(new WeakMap).is.not.a.Set;
  (function () {
    I.hope(arguments).is.not.a.Set;
  })();


});