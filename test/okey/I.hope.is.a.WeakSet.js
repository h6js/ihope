I.do('I.hope.a.WeakSet :', function (I) {
  I.hope().is.not.a.WeakSet;
  I.hope(null).is.not.a.WeakSet;
  I.hope(true).is.not.a.WeakSet;
  I.hope(123).is.not.a.WeakSet;
  I.hope('abc').is.not.a.WeakSet;
  I.hope(Symbol()).is.not.a.WeakSet;
  I.hope({}).is.not.a.WeakSet;
  I.hope(function () { }).is.not.a.WeakSet;
  I.hope(new Boolean).is.not.a.WeakSet;
  I.hope(new Number).is.not.a.WeakSet;
  I.hope(new String).is.not.a.WeakSet;
  I.hope([]).is.not.a.WeakSet;
  I.hope(/ /).is.not.a.WeakSet;
  I.hope(new Date).is.not.a.WeakSet;
  I.hope(new Error).is.not.a.WeakSet;
  I.hope(new Set).is.not.a.WeakSet;
  I.hope(new WeakSet).is.a.WeakSet;
  I.hope(new Map).is.not.a.WeakSet;
  I.hope(new WeakMap).is.not.a.WeakSet;
  (function () {
    I.hope(arguments).is.not.a.WeakSet;
  })();

});