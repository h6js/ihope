I.do('I.hope().strict.equal() :', function (I) {
  I.hope(undefined).strict.equal(undefined);
  I.hope(null).strict.equal(null);
  I.hope(false).strict.equal(false);
  I.hope(true).strict.equal(true);
  I.hope(0).strict.equal(0);
  I.hope(123).strict.equal(123);
  I.hope(1 / 0).strict.equal(2 / 0);
  I.hope('').strict.equal('');
  I.hope('abc').strict.equal('abc');
  var symbol = Symbol();
  I.hope(symbol).strict.equal(symbol);
  var the_object = {};
  I.hope(the_object).strict.equal(the_object);
  var the_function = function () { };
  I.hope(the_function).strict.equal(the_function);
  I.hope(0.1+0.2).strict.equal(0.3);


  I.hope(null).not.strict.equal(undefined);
  I.hope(false).not.strict.equal(undefined);
  I.hope(NaN).not.strict.equal(undefined);
  I.hope(0).not.strict.equal(undefined);
  I.hope('').not.strict.equal(undefined);
  I.hope('0.0').not.strict.equal(undefined);

  I.hope(undefined).not.strict.equal(null);
  I.hope(false).not.strict.equal(null);
  I.hope(NaN).not.strict.equal(null);
  I.hope(0).not.strict.equal(null);
  I.hope('').not.strict.equal(null);
  I.hope('0.0').not.strict.equal(null);

  I.hope(undefined).not.strict.equal(false);
  I.hope(null).not.strict.equal(false);
  I.hope(NaN).not.strict.equal(false);
  I.hope(0).not.strict.equal(false);
  I.hope('').not.strict.equal(false);
  I.hope('0.0').not.strict.equal(false);
  I.hope(new Boolean).not.strict.equal(false);
  I.hope(new Number).not.strict.equal(false);
  I.hope(new String).not.strict.equal(false);
  I.hope(new String('0.0')).not.strict.equal(false);
  I.hope(1).not.strict.equal(true);
  I.hope('1.0').not.strict.equal(true);
  I.hope(new Boolean(true)).not.strict.equal(true);
  I.hope(new Number(1)).not.strict.equal(true);
  I.hope(new String('1.0')).not.strict.equal(true);

  I.hope(undefined).not.strict.equal(NaN);
  I.hope(null).not.strict.equal(NaN);
  I.hope(false).not.strict.equal(NaN);
  I.hope(NaN).not.strict.equal(NaN);
  I.hope(0).not.strict.equal(NaN);
  I.hope('').not.strict.equal(NaN);

  I.hope(undefined).not.strict.equal(0);
  I.hope(null).not.strict.equal(0);
  I.hope(false).not.strict.equal(0);
  I.hope(NaN).not.strict.equal(0);
  I.hope('').not.strict.equal(0);
  I.hope('0.0').not.strict.equal(0);
  I.hope(new Boolean).not.strict.equal(0);
  I.hope(new Number).not.strict.equal(0);
  I.hope(new String).not.strict.equal(0);
  I.hope(new String('0.0')).not.strict.equal(0);
  I.hope(true).not.strict.equal(1);
  I.hope('1.0').not.strict.equal(1);
  I.hope(new Boolean(true)).not.strict.equal(1);
  I.hope(new Number(1)).not.strict.equal(1);
  I.hope(new String('1.0')).not.strict.equal(1);

  I.hope(undefined).not.strict.equal('');
  I.hope(null).not.strict.equal('');
  I.hope(false).not.strict.equal('');
  I.hope(0).not.strict.equal('');
  I.hope(new Boolean).not.strict.equal('');
  I.hope(new Number).not.strict.equal('');
  I.hope(false).not.strict.equal('0.0');
  I.hope(0).not.strict.equal('0.0');
  I.hope(new Boolean).not.strict.equal('0.0');
  I.hope(new Number).not.strict.equal('0.0');
  I.hope(true).not.strict.equal('1.0');
  I.hope(1).not.strict.equal('1.0');
  I.hope(new Boolean(true)).not.strict.equal('1.0');
  I.hope(new Number(1)).not.strict.equal('1.0');

  I.hope(Symbol(0)).not.strict.equal(Symbol(0));
  I.hope({}).not.strict.equal({});
  I.hope(function () { }).not.strict.equal(function () { });

  I.hope(0.1+0.2).not.strict.equal(0.300001);

});

