I.do('I.hope().is.equal() :', function (I) {
  I.hope(undefined).is.not.equal(undefined);
  I.hope(null).is.not.equal(undefined);

  I.hope(undefined).is.not.equal(null);
  I.hope(null).is.not.equal(null);

  I.hope(false).is.not.equal(false);
  I.hope(0).is.not.equal(false);
  I.hope('').is.not.equal(false);
  I.hope('0.0').is.not.equal(false);
  I.hope(new Boolean).is.not.equal(false);
  I.hope(new Number).is.not.equal(false);
  I.hope(new String).is.not.equal(false);
  I.hope(new String('0.0')).is.not.equal(false);
  I.hope(true).is.not.equal(true);
  I.hope(1).is.not.equal(true);
  I.hope('1.0').is.not.equal(true);
  I.hope(new Boolean(true)).is.not.equal(true);
  I.hope(new Number(1)).is.not.equal(true);
  I.hope(new String('1.0')).is.not.equal(true);

  I.hope(false).is.not.equal(0);
  I.hope(0).is.not.equal(0);
  I.hope('').is.not.equal(0);
  I.hope('0.0').is.not.equal(0);
  I.hope(new Boolean).is.not.equal(0);
  I.hope(new Number).is.not.equal(0);
  I.hope(new String).is.not.equal(0);
  I.hope(new String('0.0')).is.not.equal(0);

  I.hope(true).is.not.equal(1);
  I.hope(1).is.not.equal(1);
  I.hope('1.0').is.not.equal(1);
  I.hope(new Boolean(true)).is.not.equal(1);
  I.hope(new Number(1)).is.not.equal(1);
  I.hope(new String('1.0')).is.not.equal(1);

  I.hope(false).is.not.equal('');
  I.hope(0).is.not.equal('');
  I.hope(new Boolean).is.not.equal('');
  I.hope(new Number).is.not.equal('');

  I.hope(false).is.not.equal('0.0');
  I.hope(0).is.not.equal('0.0');
  I.hope(new Boolean).is.not.equal('0.0');
  I.hope(new Number).is.not.equal('0.0');

  I.hope(true).is.not.equal('1.0');
  I.hope(1).is.not.equal('1.0');
  I.hope(new Boolean(true)).is.not.equal('1.0');
  I.hope(new Number(1)).is.not.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).is.not.equal(symbol);

  var the_object = {};
  I.hope(the_object).is.not.equal(the_object);

  var the_function = function () { };
  I.hope(the_function).is.not.equal(the_function);

  I.hope(false).is.equal(undefined);
  I.hope(NaN).is.equal(undefined);
  I.hope(0).is.equal(undefined);
  I.hope('').is.equal(undefined);
  I.hope('0.0').is.equal(undefined);

  I.hope(false).is.equal(null);
  I.hope(NaN).is.equal(null);
  I.hope(0).is.equal(null);
  I.hope('').is.equal(null);
  I.hope('0.0').is.equal(null);

  I.hope(undefined).is.equal(false);
  I.hope(null).is.equal(false);
  I.hope(NaN).is.equal(false);

  I.hope(undefined).is.equal(NaN);
  I.hope(null).is.equal(NaN);
  I.hope(false).is.equal(NaN);
  I.hope(NaN).is.equal(NaN);
  I.hope(0).is.equal(NaN);
  I.hope('').is.equal(NaN);

  I.hope(undefined).is.equal(0);
  I.hope(null).is.equal(0);
  I.hope(NaN).is.equal(0);

  I.hope(undefined).is.equal('');
  I.hope(null).is.equal('');

  I.hope(Symbol(0)).is.equal(Symbol(0));

  I.hope({}).is.equal({});
  I.hope(function () { }).is.equal(function () { });


});

