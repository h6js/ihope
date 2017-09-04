I.do('I.hope().is.equal() :', function (I) {
  I.hope(undefined).equal(undefined);
  I.hope(null).equal(undefined);

  I.hope(undefined).equal(null);
  I.hope(null).equal(null);

  I.hope(false).equal(false);
  I.hope(0).equal(false);
  I.hope('').equal(false);
  I.hope('0.0').equal(false);
  I.hope(new Boolean).equal(false);
  I.hope(new Number).equal(false);
  I.hope(new String).equal(false);
  I.hope(new String('0.0')).equal(false);
  I.hope(true).equal(true);
  I.hope(1).equal(true);
  I.hope('1.0').equal(true);
  I.hope(new Boolean(true)).equal(true);
  I.hope(new Number(1)).equal(true);
  I.hope(new String('1.0')).equal(true);

  I.hope(false).equal(0);
  I.hope(0).equal(0);
  I.hope('').equal(0);
  I.hope('0.0').equal(0);
  I.hope(new Boolean).equal(0);
  I.hope(new Number).equal(0);
  I.hope(new String).equal(0);
  I.hope(new String('0.0')).equal(0);

  I.hope(true).equal(1);
  I.hope(1).equal(1);
  I.hope('1.0').equal(1);
  I.hope(new Boolean(true)).equal(1);
  I.hope(new Number(1)).equal(1);
  I.hope(new String('1.0')).equal(1);

  I.hope(1 / 0).equal(2 / 0);

  I.hope(false).equal('');
  I.hope(0).equal('');
  I.hope(new Boolean).equal('');
  I.hope(new Number).equal('');

  I.hope(false).equal('0.0');
  I.hope(0).equal('0.0');
  I.hope(new Boolean).equal('0.0');
  I.hope(new Number).equal('0.0');

  I.hope(true).equal('1.0');
  I.hope(1).equal('1.0');
  I.hope(new Boolean(true)).equal('1.0');
  I.hope(new Number(1)).equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).equal(symbol);

  var the_object = {};
  I.hope(the_object).equal(the_object);

  var the_function = function () { };
  I.hope(the_function).equal(the_function);

  I.hope(false).not.equal(undefined);
  I.hope(NaN).not.equal(undefined);
  I.hope(0).not.equal(undefined);
  I.hope('').not.equal(undefined);
  I.hope('0.0').not.equal(undefined);

  I.hope(false).not.equal(null);
  I.hope(NaN).not.equal(null);
  I.hope(0).not.equal(null);
  I.hope('').not.equal(null);
  I.hope('0.0').not.equal(null);

  I.hope(undefined).not.equal(false);
  I.hope(null).not.equal(false);
  I.hope(NaN).not.equal(false);

  I.hope(undefined).not.equal(NaN);
  I.hope(null).not.equal(NaN);
  I.hope(false).not.equal(NaN);
  I.hope(NaN).not.equal(NaN);
  I.hope(0).not.equal(NaN);
  I.hope('').not.equal(NaN);

  I.hope(undefined).not.equal(0);
  I.hope(null).not.equal(0);
  I.hope(NaN).not.equal(0);

  I.hope(undefined).not.equal('');
  I.hope(null).not.equal('');

  I.hope(Symbol(0)).not.equal(Symbol(0));

  I.hope({}).not.equal({});
  I.hope(function () { }).not.equal(function () { });

  I.sum();
});

