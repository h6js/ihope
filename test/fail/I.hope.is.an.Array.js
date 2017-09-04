I.do('I.hope().is.an.Array :', function (I) {
  I.hope().is.an.Array;
  I.hope(null).is.an.Array;
  I.hope(true).is.an.Array;
  I.hope(123).is.an.Array;
  I.hope('abc').is.an.Array;
  I.hope(Symbol()).is.an.Array;
  I.hope({}).is.an.Array;
  I.hope(function () { }).is.an.Array;
  I.hope(new Boolean).is.an.Array;
  I.hope(new Number).is.an.Array;
  I.hope(new String).is.an.Array;
  I.hope([]).is.not.an.Array;
  I.hope(/ /).is.an.Array;
  I.hope(new Date).is.an.Array;
  I.hope(new Error).is.an.Array;
  I.hope(new Set).is.an.Array;
  I.hope(new WeakSet).is.an.Array;
  I.hope(new Map).is.an.Array;
  I.hope(new WeakMap).is.an.Array;
  (function () {
    I.hope(arguments).is.an.Array;
  })();

  I.sum();
});