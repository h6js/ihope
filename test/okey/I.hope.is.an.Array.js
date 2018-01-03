I.do('I.hope().is.an.Array :', function (I) {
  I.hope().is.not.an.Array;
  I.hope(null).is.not.an.Array;
  I.hope(true).is.not.an.Array;
  I.hope(123).is.not.an.Array;
  I.hope('abc').is.not.an.Array;
  I.hope(Symbol()).is.not.an.Array;
  I.hope({}).is.not.an.Array;
  I.hope(function () { }).is.not.an.Array;
  I.hope(new Boolean).is.not.an.Array;
  I.hope(new Number).is.not.an.Array;
  I.hope(new String).is.not.an.Array;
  I.hope([]).is.an.Array;
  I.hope(/ /).is.not.an.Array;
  I.hope(new Date).is.not.an.Array;
  I.hope(new Error).is.not.an.Array;
  I.hope(new Set).is.not.an.Array;
  I.hope(new WeakSet).is.not.an.Array;
  I.hope(new Map).is.not.an.Array;
  I.hope(new WeakMap).is.not.an.Array;
  (function () {
    I.hope(arguments).is.not.an.Array;
  })();


});