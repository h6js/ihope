I.do('I.hope.is.function :', function (I) {
  I.hope().is.not.function;
  I.hope(null).is.not.function;
  I.hope(false).is.not.function;
  I.hope(true).is.not.function;
  I.hope(123).is.not.function;
  I.hope('abc').is.not.function;
  I.hope(Symbol()).is.not.function;
  I.hope({}).is.not.function;
  I.hope(function () { }).is.function;

  I.sum();
});

I.do('I.hope.Function :', function (I) {
  I.hope().is.not.Function;
  I.hope(null).is.not.Function;
  I.hope(true).is.not.Function;
  I.hope(123).is.not.Function;
  I.hope('abc').is.not.Function;
  I.hope(Symbol()).is.not.Function;
  I.hope({}).is.not.Function;
  I.hope(function () { }).is.Function;
  I.hope(new Boolean).is.not.Function;
  I.hope(new Number).is.not.Function;
  I.hope(new String).is.not.Function;
  I.hope([]).is.not.Function;
  I.hope(/ /).is.not.Function;
  I.hope(new Date).is.not.Function;
  I.hope(new Error).is.not.Function;
  I.hope(new Set).is.not.Function;
  I.hope(new WeakSet).is.not.Function;
  I.hope(new Map).is.not.Function;
  I.hope(new WeakMap).is.not.Function;
  (function () {
    I.hope(arguments).is.not.Function;
  })();

  I.sum();
});