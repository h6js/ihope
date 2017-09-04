I.do('I.hope.is.a.string :', function (I) {
  I.hope().is.a.string;
  I.hope(null).is.a.string;
  I.hope(false).is.a.string;
  I.hope(true).is.a.string;
  I.hope(123).is.a.string;
  I.hope('abc').is.not.a.string;
  I.hope(Symbol()).is.a.string;
  I.hope({}).is.a.string;
  I.hope(function () { }).is.a.string;
  I.hope(new String).is.a.string;

  I.sum();
});

I.do('I.hope.a.String :', function (I) {
  I.hope().is.a.String;
  I.hope(null).is.a.String;
  I.hope(true).is.a.String;
  I.hope(123).is.a.String;
  I.hope('abc').is.a.String;
  I.hope(Symbol()).is.a.String;
  I.hope({}).is.a.String;
  I.hope(function () { }).is.a.String;
  I.hope(new Boolean).is.a.String;
  I.hope(new Number).is.a.String;
  I.hope(new String).is.not.a.String;
  I.hope([]).is.a.String;
  I.hope(/ /).is.a.String;
  I.hope(new Date).is.a.String;
  I.hope(new Error).is.a.String;
  I.hope(new Set).is.a.String;
  I.hope(new WeakSet).is.a.String;
  I.hope(new Map).is.a.String;
  I.hope(new WeakMap).is.a.String;
  (function () {
    I.hope(arguments).is.a.String;
  })();

  I.sum();
});