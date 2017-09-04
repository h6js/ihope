I.do('I.hope.is.a.number :', function (I) {
  I.hope().is.a.number;
  I.hope(null).is.a.number;
  I.hope(false).is.a.number;
  I.hope(true).is.a.number;
  I.hope(NaN).is.not.a.number;
  I.hope(123).is.not.a.number;
  I.hope(Infinity).is.not.a.number;
  I.hope('abc').is.a.number;
  I.hope(Symbol()).is.a.number;
  I.hope({}).is.a.number;
  I.hope(function () { }).is.a.number;
  I.hope(new Number).is.a.number;

  I.sum();
});

I.do('I.hope.a.Number :', function (I) {
  I.hope().is.a.Number;
  I.hope(null).is.a.Number;
  I.hope(true).is.a.Number;
  I.hope(NaN).is.a.Number;
  I.hope(123).is.a.Number;
  I.hope(Infinity).is.a.Number;
  I.hope('abc').is.a.Number;
  I.hope(Symbol()).is.a.Number;
  I.hope({}).is.a.Number;
  I.hope(function () { }).is.a.Number;
  I.hope(new Boolean).is.a.Number;
  I.hope(new Number).is.not.a.Number;
  I.hope(new String).is.a.Number;
  I.hope([]).is.a.Number;
  I.hope(/ /).is.a.Number;
  I.hope(new Date).is.a.Number;
  I.hope(new Error).is.a.Number;
  I.hope(new Set).is.a.Number;
  I.hope(new WeakSet).is.a.Number;
  I.hope(new Map).is.a.Number;
  I.hope(new WeakMap).is.a.Number;
  (function () {
    I.hope(arguments).is.a.Number;
  })();

  I.sum();
});