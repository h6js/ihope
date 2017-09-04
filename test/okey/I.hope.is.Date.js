I.do('I.hope().is.Date :', function (I) {
  I.hope().is.not.Date;
  I.hope(null).is.not.Date;
  I.hope(true).is.not.Date;
  I.hope(123).is.not.Date;
  I.hope('abc').is.not.Date;
  I.hope(Symbol()).is.not.Date;
  I.hope({}).is.not.Date;
  I.hope(function () { }).is.not.Date;
  I.hope(new Boolean).is.not.Date;
  I.hope(new Number).is.not.Date;
  I.hope(new String).is.not.Date;
  I.hope([]).is.not.Date;
  I.hope(/ /).is.not.Date;
  I.hope(new Date).is.Date;
  I.hope(new Error).is.not.Date;
  I.hope(new Set).is.not.Date;
  I.hope(new WeakSet).is.not.Date;
  I.hope(new Map).is.not.Date;
  I.hope(new WeakMap).is.not.Date;
  (function () {
    I.hope(arguments).is.not.Date;
  })();

  I.sum();
});