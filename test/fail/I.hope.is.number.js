I.do('I.hope.is.number :', function (I) {
  I.hope().is.number;
  I.hope(null).is.number;
  I.hope(false).is.number;
  I.hope(true).is.number;
  I.hope(NaN).is.not.number;
  I.hope(123).is.not.number;
  I.hope(Infinity).is.not.number;
  I.hope('abc').is.number;
  I.hope(Symbol()).is.number;
  I.hope({}).is.number;
  I.hope(function () { }).is.number;
  I.hope(new Number).is.number;

  I.sum();
});

I.do('I.hope.Number :', function (I) {
  I.hope().is.Number;
  I.hope(null).is.Number;
  I.hope(true).is.Number;
  I.hope(NaN).is.Number;
  I.hope(123).is.Number;
  I.hope(Infinity).is.Number;
  I.hope('abc').is.Number;
  I.hope(Symbol()).is.Number;
  I.hope({}).is.Number;
  I.hope(function () { }).is.Number;
  I.hope(new Boolean).is.Number;
  I.hope(new Number).is.not.Number;
  I.hope(new String).is.Number;
  I.hope([]).is.Number;
  I.hope(/ /).is.Number;
  I.hope(new Date).is.Number;
  I.hope(new Error).is.Number;
  I.hope(new Set).is.Number;
  I.hope(new WeakSet).is.Number;
  I.hope(new Map).is.Number;
  I.hope(new WeakMap).is.Number;
  (function () {
    I.hope(arguments).is.Number;
  })();

  I.sum();
});