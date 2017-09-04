I.do('I.hope().is.object :', function (I) {
  I.hope().is.not.object;
  I.hope(null).is.not.object;
  I.hope(false).is.not.object;
  I.hope(true).is.not.object;
  I.hope(123).is.not.object;
  I.hope('abc').is.not.object;
  I.hope(Symbol()).is.not.object;
  I.hope({}).is.object;
  I.hope(function () { }).is.not.object;

  I.sum();
});

I.do('I.hope.is.Object :', function (I) {
  I.hope().is.not.Object;
  I.hope(null).is.not.Object;
  I.hope(true).is.not.Object;
  I.hope(123).is.not.Object;
  I.hope('abc').is.not.Object;
  I.hope(Symbol()).is.not.Object;
  I.hope({}).is.Object;
  I.hope(function () { }).is.Object;
  I.hope(new Boolean).is.Object;
  I.hope(new Number).is.Object;
  I.hope(new String).is.Object;
  I.hope([]).is.Object;
  I.hope(/ /).is.Object;
  I.hope(new Date).is.Object;
  I.hope(new Error).is.Object;
  I.hope(new Set).is.Object;
  I.hope(new WeakSet).is.Object;
  I.hope(new Map).is.Object;
  I.hope(new WeakMap).is.Object;
  (function () {
    I.hope(arguments).is.Object;
  })();

  I.sum();
});