I.do('I.hope.WeakSet :', function (I) {
  I.hope().is.WeakSet;
  I.hope(null).is.WeakSet;
  I.hope(true).is.WeakSet;
  I.hope(123).is.WeakSet;
  I.hope('abc').is.WeakSet;
  I.hope(Symbol()).is.WeakSet;
  I.hope({}).is.WeakSet;
  I.hope(function () { }).is.WeakSet;
  I.hope(new Boolean).is.WeakSet;
  I.hope(new Number).is.WeakSet;
  I.hope(new String).is.WeakSet;
  I.hope([]).is.WeakSet;
  I.hope(/ /).is.WeakSet;
  I.hope(new Date).is.WeakSet;
  I.hope(new Error).is.WeakSet;
  I.hope(new Set).is.WeakSet;
  I.hope(new WeakSet).is.not.WeakSet;
  I.hope(new Map).is.WeakSet;
  I.hope(new WeakMap).is.WeakSet;
  (function () {
    I.hope(arguments).is.WeakSet;
  })();

});