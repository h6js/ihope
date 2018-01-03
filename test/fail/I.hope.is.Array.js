I.do('I.hope().is.Array :', function (I) {
  I.hope().is.Array;
  I.hope(null).is.Array;
  I.hope(true).is.Array;
  I.hope(123).is.Array;
  I.hope('abc').is.Array;
  I.hope(Symbol()).is.Array;
  I.hope({}).is.Array;
  I.hope(function () { }).is.Array;
  I.hope(new Boolean).is.Array;
  I.hope(new Number).is.Array;
  I.hope(new String).is.Array;
  I.hope([]).is.not.Array;
  I.hope(/ /).is.Array;
  I.hope(new Date).is.Array;
  I.hope(new Error).is.Array;
  I.hope(new Set).is.Array;
  I.hope(new WeakSet).is.Array;
  I.hope(new Map).is.Array;
  I.hope(new WeakMap).is.Array;
  (function () {
    I.hope(arguments).is.Array;
  })();


});