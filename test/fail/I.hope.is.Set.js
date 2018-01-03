I.do('I.hope.Set :', function (I) {
  I.hope().is.Set;
  I.hope(null).is.Set;
  I.hope(true).is.Set;
  I.hope(123).is.Set;
  I.hope('abc').is.Set;
  I.hope(Symbol()).is.Set;
  I.hope({}).is.Set;
  I.hope(function () { }).is.Set;
  I.hope(new Boolean).is.Set;
  I.hope(new Number).is.Set;
  I.hope(new String).is.Set;
  I.hope([]).is.Set;
  I.hope(/ /).is.Set;
  I.hope(new Date).is.Set;
  I.hope(new Error).is.Set;
  I.hope(new Set).is.not.Set;
  I.hope(new WeakSet).is.Set;
  I.hope(new Map).is.Set;
  I.hope(new WeakMap).is.Set;
  (function () {
    I.hope(arguments).is.Set;
  })();


});