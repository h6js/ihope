I.do('I.hope().is.is.strict.equal() :', function (I) {
  I.hope(undefined).is.strict.equal(undefined);
  I.hope(null).is.strict.equal(null);
  I.hope(false).is.strict.equal(false);
  I.hope(true).is.strict.equal(true);
  I.hope(0).is.strict.equal(0);
  I.hope(123).is.strict.equal(123);
  I.hope(1 / 0).is.strict.equal(2 / 0);
  I.hope('').is.strict.equal('');
  I.hope('abc').is.strict.equal('abc');
  var symbol = Symbol();
  I.hope(symbol).is.strict.equal(symbol);
  var the_object = {};
  I.hope(the_object).is.strict.equal(the_object);
  var the_function = function () { };
  I.hope(the_function).is.strict.equal(the_function);


  I.hope(null).is.not.strict.equal(undefined);
  I.hope(false).is.not.strict.equal(undefined);
  I.hope(NaN).is.not.strict.equal(undefined);
  I.hope(0).is.not.strict.equal(undefined);
  I.hope('').is.not.strict.equal(undefined);
  I.hope('0.0').is.not.strict.equal(undefined);

  I.hope(undefined).is.not.strict.equal(null);
  I.hope(false).is.not.strict.equal(null);
  I.hope(NaN).is.not.strict.equal(null);
  I.hope(0).is.not.strict.equal(null);
  I.hope('').is.not.strict.equal(null);
  I.hope('0.0').is.not.strict.equal(null);

  I.hope(undefined).is.not.strict.equal(false);
  I.hope(null).is.not.strict.equal(false);
  I.hope(NaN).is.not.strict.equal(false);
  I.hope(0).is.not.strict.equal(false);
  I.hope('').is.not.strict.equal(false);
  I.hope('0.0').is.not.strict.equal(false);
  I.hope(new Boolean).is.not.strict.equal(false);
  I.hope(new Number).is.not.strict.equal(false);
  I.hope(new String).is.not.strict.equal(false);
  I.hope(new String('0.0')).is.not.strict.equal(false);
  I.hope(1).is.not.strict.equal(true);
  I.hope('1.0').is.not.strict.equal(true);
  I.hope(new Boolean(true)).is.not.strict.equal(true);
  I.hope(new Number(1)).is.not.strict.equal(true);
  I.hope(new String('1.0')).is.not.strict.equal(true);

  I.hope(undefined).is.not.strict.equal(NaN);
  I.hope(null).is.not.strict.equal(NaN);
  I.hope(false).is.not.strict.equal(NaN);
  I.hope(NaN).is.not.strict.equal(NaN);
  I.hope(0).is.not.strict.equal(NaN);
  I.hope('').is.not.strict.equal(NaN);

  I.hope(undefined).is.not.strict.equal(0);
  I.hope(null).is.not.strict.equal(0);
  I.hope(false).is.not.strict.equal(0);
  I.hope(NaN).is.not.strict.equal(0);
  I.hope('').is.not.strict.equal(0);
  I.hope('0.0').is.not.strict.equal(0);
  I.hope(new Boolean).is.not.strict.equal(0);
  I.hope(new Number).is.not.strict.equal(0);
  I.hope(new String).is.not.strict.equal(0);
  I.hope(new String('0.0')).is.not.strict.equal(0);
  I.hope(true).is.not.strict.equal(1);
  I.hope('1.0').is.not.strict.equal(1);
  I.hope(new Boolean(true)).is.not.strict.equal(1);
  I.hope(new Number(1)).is.not.strict.equal(1);
  I.hope(new String('1.0')).is.not.strict.equal(1);

  I.hope(undefined).is.not.strict.equal('');
  I.hope(null).is.not.strict.equal('');
  I.hope(false).is.not.strict.equal('');
  I.hope(0).is.not.strict.equal('');
  I.hope(new Boolean).is.not.strict.equal('');
  I.hope(new Number).is.not.strict.equal('');
  I.hope(false).is.not.strict.equal('0.0');
  I.hope(0).is.not.strict.equal('0.0');
  I.hope(new Boolean).is.not.strict.equal('0.0');
  I.hope(new Number).is.not.strict.equal('0.0');
  I.hope(true).is.not.strict.equal('1.0');
  I.hope(1).is.not.strict.equal('1.0');
  I.hope(new Boolean(true)).is.not.strict.equal('1.0');
  I.hope(new Number(1)).is.not.strict.equal('1.0');

  I.hope(Symbol(0)).is.not.strict.equal(Symbol(0));
  I.hope({}).is.not.strict.equal({});
  I.hope(function () { }).is.not.strict.equal(function () { });

  I.sum();
});

