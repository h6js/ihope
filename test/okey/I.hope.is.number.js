I.do('I.hope.is.number :', function (I) {
  I.hope().is.not.number;
  I.hope(null).is.not.number;
  I.hope(false).is.not.number;
  I.hope(true).is.not.number;
  I.hope(NaN).is.number;
  I.hope(123).is.number;
  I.hope(Infinity).is.number;
  I.hope('abc').is.not.number;
  I.hope(Symbol()).is.not.number;
  I.hope({}).is.not.number;
  I.hope(function () { }).is.not.number;
  I.hope(new Number).is.not.number;

  I.sum();
});

I.do('I.hope.Number :', function (I) {
  I.hope().is.not.Number;
  I.hope(null).is.not.Number;
  I.hope(true).is.not.Number;
  I.hope(NaN).is.not.Number;
  I.hope(123).is.not.Number;
  I.hope(Infinity).is.not.Number;
  I.hope('abc').is.not.Number;
  I.hope(Symbol()).is.not.Number;
  I.hope({}).is.not.Number;
  I.hope(function () { }).is.not.Number;
  I.hope(new Boolean).is.not.Number;
  I.hope(new Number).is.Number;
  I.hope(new String).is.not.Number;
  I.hope([]).is.not.Number;
  I.hope(/ /).is.not.Number;
  I.hope(new Date).is.not.Number;
  I.hope(new Error).is.not.Number;
  I.hope(new Set).is.not.Number;
  I.hope(new WeakSet).is.not.Number;
  I.hope(new Map).is.not.Number;
  I.hope(new WeakMap).is.not.Number;
  (function () {
    I.hope(arguments).is.not.Number;
  })();

  I.sum();
});