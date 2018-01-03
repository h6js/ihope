I.do('I.hope.is.string :', function (I) {
  I.hope().is.not.string;
  I.hope(null).is.not.string;
  I.hope(false).is.not.string;
  I.hope(true).is.not.string;
  I.hope(123).is.not.string;
  I.hope('abc').is.string;
  I.hope(Symbol()).is.not.string;
  I.hope({}).is.not.string;
  I.hope(function () { }).is.not.string;
  I.hope(new String).is.not.string;


});

I.do('I.hope.String :', function (I) {
  I.hope().is.not.String;
  I.hope(null).is.not.String;
  I.hope(true).is.not.String;
  I.hope(123).is.not.String;
  I.hope('abc').is.not.String;
  I.hope(Symbol()).is.not.String;
  I.hope({}).is.not.String;
  I.hope(function () { }).is.not.String;
  I.hope(new Boolean).is.not.String;
  I.hope(new Number).is.not.String;
  I.hope(new String).is.String;
  I.hope([]).is.not.String;
  I.hope(/ /).is.not.String;
  I.hope(new Date).is.not.String;
  I.hope(new Error).is.not.String;
  I.hope(new Set).is.not.String;
  I.hope(new WeakSet).is.not.String;
  I.hope(new Map).is.not.String;
  I.hope(new WeakMap).is.not.String;
  (function () {
    I.hope(arguments).is.not.String;
  })();


});