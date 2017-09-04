I.do('I.hope.is.a.function :', function (I) {
  I.hope().is.a.function;
  I.hope(null).is.a.function;
  I.hope(false).is.a.function;
  I.hope(true).is.a.function;
  I.hope(123).is.a.function;
  I.hope('abc').is.a.function;
  I.hope(Symbol()).is.a.function;
  I.hope({}).is.a.function;
  I.hope(function () { }).is.not.a.function;

  I.sum();
});

I.do('I.hope.a.Function :', function (I) {
  I.hope().is.a.Function;
  I.hope(null).is.a.Function;
  I.hope(true).is.a.Function;
  I.hope(123).is.a.Function;
  I.hope('abc').is.a.Function;
  I.hope(Symbol()).is.a.Function;
  I.hope({}).is.a.Function;
  I.hope(function () { }).is.not.a.Function;
  I.hope(new Boolean).is.a.Function;
  I.hope(new Number).is.a.Function;
  I.hope(new String).is.a.Function;
  I.hope([]).is.a.Function;
  I.hope(/ /).is.a.Function;
  I.hope(new Date).is.a.Function;
  I.hope(new Error).is.a.Function;
  I.hope(new Set).is.a.Function;
  I.hope(new WeakSet).is.a.Function;
  I.hope(new Map).is.a.Function;
  I.hope(new WeakMap).is.a.Function;
  (function () {
    I.hope(arguments).is.a.Function;
  })();

  I.sum();
});