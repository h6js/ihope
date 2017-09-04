I.do('I.hope.is.a.string :', function (I) {
  I.hope().is.not.a.string;
  I.hope(null).is.not.a.string;
  I.hope(false).is.not.a.string;
  I.hope(true).is.not.a.string;
  I.hope(123).is.not.a.string;
  I.hope('abc').is.a.string;
  I.hope(Symbol()).is.not.a.string;
  I.hope({}).is.not.a.string;
  I.hope(function () { }).is.not.a.string;
  I.hope(new String).is.not.a.string;

  I.sum();
});

I.do('I.hope.a.String :', function (I) {
  I.hope().is.not.a.String;
  I.hope(null).is.not.a.String;
  I.hope(true).is.not.a.String;
  I.hope(123).is.not.a.String;
  I.hope('abc').is.not.a.String;
  I.hope(Symbol()).is.not.a.String;
  I.hope({}).is.not.a.String;
  I.hope(function () { }).is.not.a.String;
  I.hope(new Boolean).is.not.a.String;
  I.hope(new Number).is.not.a.String;
  I.hope(new String).is.a.String;
  I.hope([]).is.not.a.String;
  I.hope(/ /).is.not.a.String;
  I.hope(new Date).is.not.a.String;
  I.hope(new Error).is.not.a.String;
  I.hope(new Set).is.not.a.String;
  I.hope(new WeakSet).is.not.a.String;
  I.hope(new Map).is.not.a.String;
  I.hope(new WeakMap).is.not.a.String;
  (function () {
    I.hope(arguments).is.not.a.String;
  })();

  I.sum();
});