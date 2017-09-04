I.do('I.hope.is.a.function :', function (I) {
  I.hope().is.not.a.function;
  I.hope(null).is.not.a.function;
  I.hope(false).is.not.a.function;
  I.hope(true).is.not.a.function;
  I.hope(123).is.not.a.function;
  I.hope('abc').is.not.a.function;
  I.hope(Symbol()).is.not.a.function;
  I.hope({}).is.not.a.function;
  I.hope(function () { }).is.a.function;

  I.sum();
});

I.do('I.hope.a.Function :', function (I) {
  I.hope().is.not.a.Function;
  I.hope(null).is.not.a.Function;
  I.hope(true).is.not.a.Function;
  I.hope(123).is.not.a.Function;
  I.hope('abc').is.not.a.Function;
  I.hope(Symbol()).is.not.a.Function;
  I.hope({}).is.not.a.Function;
  I.hope(function () { }).is.a.Function;
  I.hope(new Boolean).is.not.a.Function;
  I.hope(new Number).is.not.a.Function;
  I.hope(new String).is.not.a.Function;
  I.hope([]).is.not.a.Function;
  I.hope(/ /).is.not.a.Function;
  I.hope(new Date).is.not.a.Function;
  I.hope(new Error).is.not.a.Function;
  I.hope(new Set).is.not.a.Function;
  I.hope(new WeakSet).is.not.a.Function;
  I.hope(new Map).is.not.a.Function;
  I.hope(new WeakMap).is.not.a.Function;
  (function () {
    I.hope(arguments).is.not.a.Function;
  })();

  I.sum();
});