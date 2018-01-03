I.do('I.hope.a.Date :', function (I) {
  I.hope().is.a.Date;
  I.hope(null).is.a.Date;
  I.hope(true).is.a.Date;
  I.hope(123).is.a.Date;
  I.hope('abc').is.a.Date;
  I.hope(Symbol()).is.a.Date;
  I.hope({}).is.a.Date;
  I.hope(function () { }).is.a.Date;
  I.hope(new Boolean).is.a.Date;
  I.hope(new Number).is.a.Date;
  I.hope(new String).is.a.Date;
  I.hope([]).is.a.Date;
  I.hope(/ /).is.a.Date;
  I.hope(new Date).is.not.a.Date;
  I.hope(new Error).is.a.Date;
  I.hope(new Set).is.a.Date;
  I.hope(new WeakSet).is.a.Date;
  I.hope(new Map).is.a.Date;
  I.hope(new WeakMap).is.a.Date;
  (function () {
    I.hope(arguments).is.a.Date;
  })();


});