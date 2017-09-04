I.do('I.hope().is.an.Arguments :', function (I) {
  I.hope().is.not.an.Arguments;
  I.hope(null).is.not.an.Arguments;
  I.hope(true).is.not.an.Arguments;
  I.hope(123).is.not.an.Arguments;
  I.hope('abc').is.not.an.Arguments;
  I.hope(Symbol()).is.not.an.Arguments;
  I.hope({}).is.not.an.Arguments;
  I.hope(function () { }).is.not.an.Arguments;
  I.hope(new Boolean).is.not.an.Arguments;
  I.hope(new Number).is.not.an.Arguments;
  I.hope(new String).is.not.an.Arguments;
  I.hope([]).is.not.an.Arguments;
  I.hope(/ /).is.not.an.Arguments;
  I.hope(new Date).is.not.an.Arguments;
  I.hope(new Error).is.not.an.Arguments;
  I.hope(new Set).is.not.an.Arguments;
  I.hope(new WeakSet).is.not.an.Arguments;
  I.hope(new Map).is.not.an.Arguments;
  I.hope(new WeakMap).is.not.an.Arguments;
  (function () {
    I.hope(arguments).is.an.Arguments;
  })();

  I.sum();
});