I.do('I.hope().is.an.object :', function (I) {
  I.hope().is.an.object;
  I.hope(null).is.an.object;
  I.hope(false).is.an.object;
  I.hope(true).is.an.object;
  I.hope(123).is.an.object;
  I.hope('abc').is.an.object;
  I.hope(Symbol()).is.an.object;
  I.hope({}).is.not.an.object;
  I.hope(function () { }).is.an.object;


});

I.do('I.hope.is.an.Object :', function (I) {
  I.hope().is.an.Object;
  I.hope(null).is.an.Object;
  I.hope(true).is.an.Object;
  I.hope(123).is.an.Object;
  I.hope('abc').is.an.Object;
  I.hope(Symbol()).is.an.Object;
  I.hope({}).is.not.an.Object;
  I.hope(function () { }).is.not.an.Object;
  I.hope(new Boolean).is.not.an.Object;
  I.hope(new Number).is.not.an.Object;
  I.hope(new String).is.not.an.Object;
  I.hope([]).is.not.an.Object;
  I.hope(/ /).is.not.an.Object;
  I.hope(new Date).is.not.an.Object;
  I.hope(new Error).is.not.an.Object;
  I.hope(new Set).is.not.an.Object;
  I.hope(new WeakSet).is.not.an.Object;
  I.hope(new Map).is.not.an.Object;
  I.hope(new WeakMap).is.not.an.Object;
  (function () {
    I.hope(arguments).is.not.an.Object;
  })();


});