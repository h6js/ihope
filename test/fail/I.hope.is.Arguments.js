I.do('I.hope().is.Arguments :', function (I) {
  I.hope().is.Arguments;
  I.hope(null).is.Arguments;
  I.hope(true).is.Arguments;
  I.hope(123).is.Arguments;
  I.hope('abc').is.Arguments;
  I.hope(Symbol()).is.Arguments;
  I.hope({}).is.Arguments;
  I.hope(function () { }).is.Arguments;
  I.hope(new Boolean).is.Arguments;
  I.hope(new Number).is.Arguments;
  I.hope(new String).is.Arguments;
  I.hope([]).is.Arguments;
  I.hope(/ /).is.Arguments;
  I.hope(new Date).is.Arguments;
  I.hope(new Error).is.Arguments;
  I.hope(new Set).is.Arguments;
  I.hope(new WeakSet).is.Arguments;
  I.hope(new Map).is.Arguments;
  I.hope(new WeakMap).is.Arguments;
  (function () {
    I.hope(arguments).is.not.Arguments;
  })();

  I.sum();
});