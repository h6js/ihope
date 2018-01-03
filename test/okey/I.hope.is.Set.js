I.do('I.hope.Set :', function (I) {
  I.hope().is.not.Set;
  I.hope(null).is.not.Set;
  I.hope(true).is.not.Set;
  I.hope(123).is.not.Set;
  I.hope('abc').is.not.Set;
  I.hope(Symbol()).is.not.Set;
  I.hope({}).is.not.Set;
  I.hope(function () { }).is.not.Set;
  I.hope(new Boolean).is.not.Set;
  I.hope(new Number).is.not.Set;
  I.hope(new String).is.not.Set;
  I.hope([]).is.not.Set;
  I.hope(/ /).is.not.Set;
  I.hope(new Date).is.not.Set;
  I.hope(new Error).is.not.Set;
  I.hope(new Set).is.Set;
  I.hope(new WeakSet).is.not.Set;
  I.hope(new Map).is.not.Set;
  I.hope(new WeakMap).is.not.Set;
  (function () {
    I.hope(arguments).is.not.Set;
  })();


});