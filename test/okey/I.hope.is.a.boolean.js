I.do('I.hope.is.a.boolean :', function (I) {
  I.hope().is.not.a.boolean;
  I.hope(null).is.not.a.boolean;
  I.hope(false).is.a.boolean;
  I.hope(true).is.a.boolean;
  I.hope(123).is.not.a.boolean;
  I.hope('abc').is.not.a.boolean;
  I.hope(Symbol()).is.not.a.boolean;
  I.hope({}).is.not.a.boolean;
  I.hope(function () { }).is.not.a.boolean;
  I.hope(new Boolean).is.not.a.boolean;

  I.sum();
});

I.do('I.hope.is.a.Boolean :', function (I) {
  I.hope().is.not.a.Boolean;
  I.hope(null).is.not.a.Boolean;
  I.hope(true).is.not.a.Boolean;
  I.hope(123).is.not.a.Boolean;
  I.hope('abc').is.not.a.Boolean;
  I.hope(Symbol()).is.not.a.Boolean;
  I.hope({}).is.not.a.Boolean;
  I.hope(function () { }).is.not.a.Boolean;
  I.hope(new Boolean).is.a.Boolean;
  I.hope(new Number).is.not.a.Boolean;
  I.hope(new String).is.not.a.Boolean;
  I.hope([]).is.not.a.Boolean;
  I.hope(/ /).is.not.a.Boolean;
  I.hope(new Date).is.not.a.Boolean;
  I.hope(new Error).is.not.a.Boolean;
  I.hope(new Set).is.not.a.Boolean;
  I.hope(new WeakSet).is.not.a.Boolean;
  I.hope(new Map).is.not.a.Boolean;
  I.hope(new WeakMap).is.not.a.Boolean;
  (function () {
    I.hope(arguments).is.not.a.Boolean;
  })();

  I.sum();
});