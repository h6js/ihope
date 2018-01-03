I.do('I.hope().is.Date :', function (I) {
  I.hope().is.Date;
  I.hope(null).is.Date;
  I.hope(true).is.Date;
  I.hope(123).is.Date;
  I.hope('abc').is.Date;
  I.hope(Symbol()).is.Date;
  I.hope({}).is.Date;
  I.hope(function () { }).is.Date;
  I.hope(new Boolean).is.Date;
  I.hope(new Number).is.Date;
  I.hope(new String).is.Date;
  I.hope([]).is.Date;
  I.hope(/ /).is.Date;
  I.hope(new Date).is.not.Date;
  I.hope(new Error).is.Date;
  I.hope(new Set).is.Date;
  I.hope(new WeakSet).is.Date;
  I.hope(new Map).is.Date;
  I.hope(new WeakMap).is.Date;
  (function () {
    I.hope(arguments).is.Date;
  })();


});