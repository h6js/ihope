I.do('I.hope.WeakSet :', function (I) {
  I.hope().is.not.WeakSet;
  I.hope(null).is.not.WeakSet;
  I.hope(true).is.not.WeakSet;
  I.hope(123).is.not.WeakSet;
  I.hope('abc').is.not.WeakSet;
  I.hope(Symbol()).is.not.WeakSet;
  I.hope({}).is.not.WeakSet;
  I.hope(function () { }).is.not.WeakSet;
  I.hope(new Boolean).is.not.WeakSet;
  I.hope(new Number).is.not.WeakSet;
  I.hope(new String).is.not.WeakSet;
  I.hope([]).is.not.WeakSet;
  I.hope(/ /).is.not.WeakSet;
  I.hope(new Date).is.not.WeakSet;
  I.hope(new Error).is.not.WeakSet;
  I.hope(new Set).is.not.WeakSet;
  I.hope(new WeakSet).is.WeakSet;
  I.hope(new Map).is.not.WeakSet;
  I.hope(new WeakMap).is.not.WeakSet;
  (function () {
    I.hope(arguments).is.not.WeakSet;
  })();

});