I.do('I.hope.is.string :', function (I) {
  I.hope().is.string;
  I.hope(null).is.string;
  I.hope(false).is.string;
  I.hope(true).is.string;
  I.hope(123).is.string;
  I.hope('abc').is.not.string;
  I.hope(Symbol()).is.string;
  I.hope({}).is.string;
  I.hope(function () { }).is.string;
  I.hope(new String).is.string;


});

I.do('I.hope.String :', function (I) {
  I.hope().is.String;
  I.hope(null).is.String;
  I.hope(true).is.String;
  I.hope(123).is.String;
  I.hope('abc').is.String;
  I.hope(Symbol()).is.String;
  I.hope({}).is.String;
  I.hope(function () { }).is.String;
  I.hope(new Boolean).is.String;
  I.hope(new Number).is.String;
  I.hope(new String).is.not.String;
  I.hope([]).is.String;
  I.hope(/ /).is.String;
  I.hope(new Date).is.String;
  I.hope(new Error).is.String;
  I.hope(new Set).is.String;
  I.hope(new WeakSet).is.String;
  I.hope(new Map).is.String;
  I.hope(new WeakMap).is.String;
  (function () {
    I.hope(arguments).is.String;
  })();


});