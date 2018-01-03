I.do('I.hope().is.equal() :', function (I) {
  I.hope(undefined).is.equal(undefined);
  I.hope(null).is.equal(undefined);

  I.hope(undefined).is.equal(null);
  I.hope(null).is.equal(null);

  I.hope(false).is.equal(false);
  I.hope(0).is.equal(false);
  I.hope('').is.equal(false);
  I.hope('0.0').is.equal(false);
  I.hope(new Boolean).is.equal(false);
  I.hope(new Number).is.equal(false);
  I.hope(new String).is.equal(false);
  I.hope(new String('0.0')).is.equal(false);
  I.hope(true).is.equal(true);
  I.hope(1).is.equal(true);
  I.hope('1.0').is.equal(true);
  I.hope(new Boolean(true)).is.equal(true);
  I.hope(new Number(1)).is.equal(true);
  I.hope(new String('1.0')).is.equal(true);

  I.hope(false).is.equal(0);
  I.hope(0).is.equal(0);
  I.hope('').is.equal(0);
  I.hope('0.0').is.equal(0);
  I.hope(new Boolean).is.equal(0);
  I.hope(new Number).is.equal(0);
  I.hope(new String).is.equal(0);
  I.hope(new String('0.0')).is.equal(0);

  I.hope(true).is.equal(1);
  I.hope(1).is.equal(1);
  I.hope('1.0').is.equal(1);
  I.hope(new Boolean(true)).is.equal(1);
  I.hope(new Number(1)).is.equal(1);
  I.hope(new String('1.0')).is.equal(1);

  I.hope(1 / 0).is.equal(2 / 0);

  I.hope(false).is.equal('');
  I.hope(0).is.equal('');
  I.hope(new Boolean).is.equal('');
  I.hope(new Number).is.equal('');

  I.hope(false).is.equal('0.0');
  I.hope(0).is.equal('0.0');
  I.hope(new Boolean).is.equal('0.0');
  I.hope(new Number).is.equal('0.0');

  I.hope(true).is.equal('1.0');
  I.hope(1).is.equal('1.0');
  I.hope(new Boolean(true)).is.equal('1.0');
  I.hope(new Number(1)).is.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).is.equal(symbol);

  var the_object = {};
  I.hope(the_object).is.equal(the_object);

  var the_function = function () { };
  I.hope(the_function).is.equal(the_function);

  I.hope(false).is.not.equal(undefined);
  I.hope(NaN).is.not.equal(undefined);
  I.hope(0).is.not.equal(undefined);
  I.hope('').is.not.equal(undefined);
  I.hope('0.0').is.not.equal(undefined);

  I.hope(false).is.not.equal(null);
  I.hope(NaN).is.not.equal(null);
  I.hope(0).is.not.equal(null);
  I.hope('').is.not.equal(null);
  I.hope('0.0').is.not.equal(null);

  I.hope(undefined).is.not.equal(false);
  I.hope(null).is.not.equal(false);
  I.hope(NaN).is.not.equal(false);

  I.hope(undefined).is.not.equal(NaN);
  I.hope(null).is.not.equal(NaN);
  I.hope(false).is.not.equal(NaN);
  I.hope(NaN).is.not.equal(NaN);
  I.hope(0).is.not.equal(NaN);
  I.hope('').is.not.equal(NaN);

  I.hope(undefined).is.not.equal(0);
  I.hope(null).is.not.equal(0);
  I.hope(NaN).is.not.equal(0);

  I.hope(undefined).is.not.equal('');
  I.hope(null).is.not.equal('');

  I.hope(Symbol(0)).is.not.equal(Symbol(0));

  I.hope({}).is.not.equal({});
  I.hope(function () { }).is.not.equal(function () { });


});

