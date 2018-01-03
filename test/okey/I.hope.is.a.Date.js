I.do('I.hope.a.Date :', function (I) {
  I.hope().is.not.a.Date;
  I.hope(null).is.not.a.Date;
  I.hope(true).is.not.a.Date;
  I.hope(123).is.not.a.Date;
  I.hope('abc').is.not.a.Date;
  I.hope(Symbol()).is.not.a.Date;
  I.hope({}).is.not.a.Date;
  I.hope(function () { }).is.not.a.Date;
  I.hope(new Boolean).is.not.a.Date;
  I.hope(new Number).is.not.a.Date;
  I.hope(new String).is.not.a.Date;
  I.hope([]).is.not.a.Date;
  I.hope(/ /).is.not.a.Date;
  I.hope(new Date).is.a.Date;
  I.hope(new Error).is.not.a.Date;
  I.hope(new Set).is.not.a.Date;
  I.hope(new WeakSet).is.not.a.Date;
  I.hope(new Map).is.not.a.Date;
  I.hope(new WeakMap).is.not.a.Date;
  (function () {
    I.hope(arguments).is.not.a.Date;
  })();


});