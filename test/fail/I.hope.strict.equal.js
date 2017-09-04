I.do('I.hope().strict.equal() :', function (I) {
  I.hope(undefined).not.strict.equal(undefined);
  I.hope(null).not.strict.equal(null);
  I.hope(false).not.strict.equal(false);
  I.hope(true).not.strict.equal(true);
  I.hope(0).not.strict.equal(0);
  I.hope(123).not.strict.equal(123);
  I.hope(1 / 0).not.strict.equal(2 / 0);
  I.hope('').not.strict.equal('');
  I.hope('abc').not.strict.equal('abc');
  var symbol = Symbol();
  I.hope(symbol).not.strict.equal(symbol);
  var the_object = {};
  I.hope(the_object).not.strict.equal(the_object);
  var the_function = function () { };
  I.hope(the_function).not.strict.equal(the_function);


  I.hope(null).strict.equal(undefined);
  I.hope(false).strict.equal(undefined);
  I.hope(NaN).strict.equal(undefined);
  I.hope(0).strict.equal(undefined);
  I.hope('').strict.equal(undefined);
  I.hope('0.0').strict.equal(undefined);

  I.hope(undefined).strict.equal(null);
  I.hope(false).strict.equal(null);
  I.hope(NaN).strict.equal(null);
  I.hope(0).strict.equal(null);
  I.hope('').strict.equal(null);
  I.hope('0.0').strict.equal(null);

  I.hope(undefined).strict.equal(false);
  I.hope(null).strict.equal(false);
  I.hope(NaN).strict.equal(false);
  I.hope(0).strict.equal(false);
  I.hope('').strict.equal(false);
  I.hope('0.0').strict.equal(false);
  I.hope(new Boolean).strict.equal(false);
  I.hope(new Number).strict.equal(false);
  I.hope(new String).strict.equal(false);
  I.hope(new String('0.0')).strict.equal(false);
  I.hope(1).strict.equal(true);
  I.hope('1.0').strict.equal(true);
  I.hope(new Boolean(true)).strict.equal(true);
  I.hope(new Number(1)).strict.equal(true);
  I.hope(new String('1.0')).strict.equal(true);

  I.hope(undefined).strict.equal(NaN);
  I.hope(null).strict.equal(NaN);
  I.hope(false).strict.equal(NaN);
  I.hope(NaN).strict.equal(NaN);
  I.hope(0).strict.equal(NaN);
  I.hope('').strict.equal(NaN);

  I.hope(undefined).strict.equal(0);
  I.hope(null).strict.equal(0);
  I.hope(false).strict.equal(0);
  I.hope(NaN).strict.equal(0);
  I.hope('').strict.equal(0);
  I.hope('0.0').strict.equal(0);
  I.hope(new Boolean).strict.equal(0);
  I.hope(new Number).strict.equal(0);
  I.hope(new String).strict.equal(0);
  I.hope(new String('0.0')).strict.equal(0);
  I.hope(true).strict.equal(1);
  I.hope('1.0').strict.equal(1);
  I.hope(new Boolean(true)).strict.equal(1);
  I.hope(new Number(1)).strict.equal(1);
  I.hope(new String('1.0')).strict.equal(1);

  I.hope(undefined).strict.equal('');
  I.hope(null).strict.equal('');
  I.hope(false).strict.equal('');
  I.hope(0).strict.equal('');
  I.hope(new Boolean).strict.equal('');
  I.hope(new Number).strict.equal('');
  I.hope(false).strict.equal('0.0');
  I.hope(0).strict.equal('0.0');
  I.hope(new Boolean).strict.equal('0.0');
  I.hope(new Number).strict.equal('0.0');
  I.hope(true).strict.equal('1.0');
  I.hope(1).strict.equal('1.0');
  I.hope(new Boolean(true)).strict.equal('1.0');
  I.hope(new Number(1)).strict.equal('1.0');

  I.hope(Symbol(0)).strict.equal(Symbol(0));
  I.hope({}).strict.equal({});
  I.hope(function () { }).strict.equal(function () { });

  I.sum();
});

