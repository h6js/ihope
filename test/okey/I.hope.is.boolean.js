I.do('I.hope.is.boolean :', function (I) {
  I.hope().is.not.boolean;
  I.hope(null).is.not.boolean;
  I.hope(false).is.boolean;
  I.hope(true).is.boolean;
  I.hope(123).is.not.boolean;
  I.hope('abc').is.not.boolean;
  I.hope(Symbol()).is.not.boolean;
  I.hope({}).is.not.boolean;
  I.hope(function () { }).is.not.boolean;
  I.hope(new Boolean).is.not.boolean;


});

I.do('I.hope.is.Boolean :', function (I) {
  I.hope().is.not.Boolean;
  I.hope(null).is.not.Boolean;
  I.hope(true).is.not.Boolean;
  I.hope(123).is.not.Boolean;
  I.hope('abc').is.not.Boolean;
  I.hope(Symbol()).is.not.Boolean;
  I.hope({}).is.not.Boolean;
  I.hope(function () { }).is.not.Boolean;
  I.hope(new Boolean).is.Boolean;
  I.hope(new Number).is.not.Boolean;
  I.hope(new String).is.not.Boolean;
  I.hope([]).is.not.Boolean;
  I.hope(/ /).is.not.Boolean;
  I.hope(new Date).is.not.Boolean;
  I.hope(new Error).is.not.Boolean;
  I.hope(new Set).is.not.Boolean;
  I.hope(new WeakSet).is.not.Boolean;
  I.hope(new Map).is.not.Boolean;
  I.hope(new WeakMap).is.not.Boolean;
  (function () {
    I.hope(arguments).is.not.Boolean;
  })();


});