I.do('I.hope.is.a.number :', function (I) {
  I.hope().is.not.a.number;
  I.hope(null).is.not.a.number;
  I.hope(false).is.not.a.number;
  I.hope(true).is.not.a.number;
  I.hope(NaN).is.a.number;
  I.hope(123).is.a.number;
  I.hope(Infinity).is.a.number;
  I.hope('abc').is.not.a.number;
  I.hope(Symbol()).is.not.a.number;
  I.hope({}).is.not.a.number;
  I.hope(function () { }).is.not.a.number;
  I.hope(new Number).is.not.a.number;

  I.sum();
});

I.do('I.hope.a.Number :', function (I) {
  I.hope().is.not.a.Number;
  I.hope(null).is.not.a.Number;
  I.hope(true).is.not.a.Number;
  I.hope(NaN).is.not.a.Number;
  I.hope(123).is.not.a.Number;
  I.hope(Infinity).is.not.a.Number;
  I.hope('abc').is.not.a.Number;
  I.hope(Symbol()).is.not.a.Number;
  I.hope({}).is.not.a.Number;
  I.hope(function () { }).is.not.a.Number;
  I.hope(new Boolean).is.not.a.Number;
  I.hope(new Number).is.a.Number;
  I.hope(new String).is.not.a.Number;
  I.hope([]).is.not.a.Number;
  I.hope(/ /).is.not.a.Number;
  I.hope(new Date).is.not.a.Number;
  I.hope(new Error).is.not.a.Number;
  I.hope(new Set).is.not.a.Number;
  I.hope(new WeakSet).is.not.a.Number;
  I.hope(new Map).is.not.a.Number;
  I.hope(new WeakMap).is.not.a.Number;
  (function () {
    I.hope(arguments).is.not.a.Number;
  })();

  I.sum();
});