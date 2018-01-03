I.do('I.hope().is.an.Arguments :', function (I) {
  I.hope().is.an.Arguments;
  I.hope(null).is.an.Arguments;
  I.hope(true).is.an.Arguments;
  I.hope(123).is.an.Arguments;
  I.hope('abc').is.an.Arguments;
  I.hope(Symbol()).is.an.Arguments;
  I.hope({}).is.an.Arguments;
  I.hope(function () { }).is.an.Arguments;
  I.hope(new Boolean).is.an.Arguments;
  I.hope(new Number).is.an.Arguments;
  I.hope(new String).is.an.Arguments;
  I.hope([]).is.an.Arguments;
  I.hope(/ /).is.an.Arguments;
  I.hope(new Date).is.an.Arguments;
  I.hope(new Error).is.an.Arguments;
  I.hope(new Set).is.an.Arguments;
  I.hope(new WeakSet).is.an.Arguments;
  I.hope(new Map).is.an.Arguments;
  I.hope(new WeakMap).is.an.Arguments;
  (function () {
    I.hope(arguments).is.not.an.Arguments;
  })();


});