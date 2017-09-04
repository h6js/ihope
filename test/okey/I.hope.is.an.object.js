I.do('I.hope().is.an.object :', function (I) {
  I.hope().is.not.an.object;
  I.hope(null).is.not.an.object;
  I.hope(false).is.not.an.object;
  I.hope(true).is.not.an.object;
  I.hope(123).is.not.an.object;
  I.hope('abc').is.not.an.object;
  I.hope(Symbol()).is.not.an.object;
  I.hope({}).is.an.object;
  I.hope(function () { }).is.not.an.object;

  I.sum();
});

I.do('I.hope.is.an.Object :', function (I) {
  I.hope().is.not.an.Object;
  I.hope(null).is.not.an.Object;
  I.hope(true).is.not.an.Object;
  I.hope(123).is.not.an.Object;
  I.hope('abc').is.not.an.Object;
  I.hope(Symbol()).is.not.an.Object;
  I.hope({}).is.an.Object;
  I.hope(function () { }).is.an.Object;
  I.hope(new Boolean).is.an.Object;
  I.hope(new Number).is.an.Object;
  I.hope(new String).is.an.Object;
  I.hope([]).is.an.Object;
  I.hope(/ /).is.an.Object;
  I.hope(new Date).is.an.Object;
  I.hope(new Error).is.an.Object;
  I.hope(new Set).is.an.Object;
  I.hope(new WeakSet).is.an.Object;
  I.hope(new Map).is.an.Object;
  I.hope(new WeakMap).is.an.Object;
  (function () {
    I.hope(arguments).is.an.Object;
  })();

  I.sum();
});