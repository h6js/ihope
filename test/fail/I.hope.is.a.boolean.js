I.do('I.hope.is.a.boolean :', function (I) {
  I.hope().is.a.boolean;
  I.hope(null).is.a.boolean;
  I.hope(false).is.not.a.boolean;
  I.hope(true).is.not.a.boolean;
  I.hope(123).is.a.boolean;
  I.hope('abc').is.a.boolean;
  I.hope(Symbol()).is.a.boolean;
  I.hope({}).is.a.boolean;
  I.hope(function () { }).is.a.boolean;
  I.hope(new Boolean).is.a.boolean;

  I.sum();
});

I.do('I.hope.is.a.Boolean :', function (I) {
  I.hope().is.a.Boolean;
  I.hope(null).is.a.Boolean;
  I.hope(true).is.a.Boolean;
  I.hope(123).is.a.Boolean;
  I.hope('abc').is.a.Boolean;
  I.hope(Symbol()).is.a.Boolean;
  I.hope({}).is.a.Boolean;
  I.hope(function () { }).is.a.Boolean;
  I.hope(new Boolean).is.not.a.Boolean;
  I.hope(new Number).is.a.Boolean;
  I.hope(new String).is.a.Boolean;
  I.hope([]).is.a.Boolean;
  I.hope(/ /).is.a.Boolean;
  I.hope(new Date).is.a.Boolean;
  I.hope(new Error).is.a.Boolean;
  I.hope(new Set).is.a.Boolean;
  I.hope(new WeakSet).is.a.Boolean;
  I.hope(new Map).is.a.Boolean;
  I.hope(new WeakMap).is.a.Boolean;
  (function () {
    I.hope(arguments).is.a.Boolean;
  })();

  I.sum();
});