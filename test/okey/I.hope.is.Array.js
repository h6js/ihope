I.do('I.hope().is.Array :', function (I) {
  I.hope().is.not.Array;
  I.hope(null).is.not.Array;
  I.hope(true).is.not.Array;
  I.hope(123).is.not.Array;
  I.hope('abc').is.not.Array;
  I.hope(Symbol()).is.not.Array;
  I.hope({}).is.not.Array;
  I.hope(function () { }).is.not.Array;
  I.hope(new Boolean).is.not.Array;
  I.hope(new Number).is.not.Array;
  I.hope(new String).is.not.Array;
  I.hope([]).is.Array;
  I.hope(/ /).is.not.Array;
  I.hope(new Date).is.not.Array;
  I.hope(new Error).is.not.Array;
  I.hope(new Set).is.not.Array;
  I.hope(new WeakSet).is.not.Array;
  I.hope(new Map).is.not.Array;
  I.hope(new WeakMap).is.not.Array;
  (function () {
    I.hope(arguments).is.not.Array;
  })();

  I.sum();
});