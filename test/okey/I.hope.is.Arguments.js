I.do('I.hope().is.Arguments :', function (I) {
  I.hope().is.not.Arguments;
  I.hope(null).is.not.Arguments;
  I.hope(true).is.not.Arguments;
  I.hope(123).is.not.Arguments;
  I.hope('abc').is.not.Arguments;
  I.hope(Symbol()).is.not.Arguments;
  I.hope({}).is.not.Arguments;
  I.hope(function () { }).is.not.Arguments;
  I.hope(new Boolean).is.not.Arguments;
  I.hope(new Number).is.not.Arguments;
  I.hope(new String).is.not.Arguments;
  I.hope([]).is.not.Arguments;
  I.hope(/ /).is.not.Arguments;
  I.hope(new Date).is.not.Arguments;
  I.hope(new Error).is.not.Arguments;
  I.hope(new Set).is.not.Arguments;
  I.hope(new WeakSet).is.not.Arguments;
  I.hope(new Map).is.not.Arguments;
  I.hope(new WeakMap).is.not.Arguments;
  (function () {
    I.hope(arguments).is.Arguments;
  })();

  I.sum();
});