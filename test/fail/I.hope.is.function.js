I.do('I.hope.is.function :', function (I) {
  I.hope().is.function;
  I.hope(null).is.function;
  I.hope(false).is.function;
  I.hope(true).is.function;
  I.hope(123).is.function;
  I.hope('abc').is.function;
  I.hope(Symbol()).is.function;
  I.hope({}).is.function;
  I.hope(function () { }).is.not.function;


});

I.do('I.hope.Function :', function (I) {
  I.hope().is.Function;
  I.hope(null).is.Function;
  I.hope(true).is.Function;
  I.hope(123).is.Function;
  I.hope('abc').is.Function;
  I.hope(Symbol()).is.Function;
  I.hope({}).is.Function;
  I.hope(function () { }).is.not.Function;
  I.hope(new Boolean).is.Function;
  I.hope(new Number).is.Function;
  I.hope(new String).is.Function;
  I.hope([]).is.Function;
  I.hope(/ /).is.Function;
  I.hope(new Date).is.Function;
  I.hope(new Error).is.Function;
  I.hope(new Set).is.Function;
  I.hope(new WeakSet).is.Function;
  I.hope(new Map).is.Function;
  I.hope(new WeakMap).is.Function;
  (function () {
    I.hope(arguments).is.Function;
  })();


});