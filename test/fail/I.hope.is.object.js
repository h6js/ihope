I.do('I.hope().is.object :', function (I) {
  I.hope().is.object;
  I.hope(null).is.object;
  I.hope(false).is.object;
  I.hope(true).is.object;
  I.hope(123).is.object;
  I.hope('abc').is.object;
  I.hope(Symbol()).is.object;
  I.hope({}).is.not.object;
  I.hope(function () { }).is.object;


});

I.do('I.hope.is.not.Object :', function (I) {
  I.hope().is.Object;
  I.hope(null).is.Object;
  I.hope(true).is.Object;
  I.hope(123).is.Object;
  I.hope('abc').is.Object;
  I.hope(Symbol()).is.Object;
  I.hope({}).is.not.Object;
  I.hope(function () { }).is.not.Object;
  I.hope(new Boolean).is.not.Object;
  I.hope(new Number).is.not.Object;
  I.hope(new String).is.not.Object;
  I.hope([]).is.not.Object;
  I.hope(/ /).is.not.Object;
  I.hope(new Date).is.not.Object;
  I.hope(new Error).is.not.Object;
  I.hope(new Set).is.not.Object;
  I.hope(new WeakSet).is.not.Object;
  I.hope(new Map).is.not.Object;
  I.hope(new WeakMap).is.not.Object;
  (function () {
    I.hope(arguments).is.not.Object;
  })();


});