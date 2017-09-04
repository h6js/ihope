I.do('I.hope.is.boolean :', function (I) {
  I.hope().is.boolean;
  I.hope(null).is.boolean;
  I.hope(false).is.not.boolean;
  I.hope(true).is.not.boolean;
  I.hope(123).is.boolean;
  I.hope('abc').is.boolean;
  I.hope(Symbol()).is.boolean;
  I.hope({}).is.boolean;
  I.hope(function () { }).is.boolean;
  I.hope(new Boolean).is.boolean;

  I.sum();
});

I.do('I.hope.is.not.Boolean :', function (I) {
  I.hope().is.Boolean;
  I.hope(null).is.Boolean;
  I.hope(true).is.Boolean;
  I.hope(123).is.Boolean;
  I.hope('abc').is.Boolean;
  I.hope(Symbol()).is.Boolean;
  I.hope({}).is.Boolean;
  I.hope(function () { }).is.Boolean;
  I.hope(new Boolean).is.not.Boolean;
  I.hope(new Number).is.Boolean;
  I.hope(new String).is.Boolean;
  I.hope([]).is.Boolean;
  I.hope(/ /).is.Boolean;
  I.hope(new Date).is.Boolean;
  I.hope(new Error).is.Boolean;
  I.hope(new Set).is.Boolean;
  I.hope(new WeakSet).is.Boolean;
  I.hope(new Map).is.Boolean;
  I.hope(new WeakMap).is.Boolean;
  (function () {
    I.hope(arguments).is.Boolean;
  })();

  I.sum();
});