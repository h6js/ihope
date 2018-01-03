I.do('I.hope().is.equal() :', function (I) {
  I.hope(undefined).not.equal(undefined);
  I.hope(null).not.equal(undefined);

  I.hope(undefined).not.equal(null);
  I.hope(null).not.equal(null);

  I.hope(false).not.equal(false);
  I.hope(0).not.equal(false);
  I.hope('').not.equal(false);
  I.hope('0.0').not.equal(false);
  I.hope(new Boolean).not.equal(false);
  I.hope(new Number).not.equal(false);
  I.hope(new String).not.equal(false);
  I.hope(new String('0.0')).not.equal(false);
  I.hope(true).not.equal(true);
  I.hope(1).not.equal(true);
  I.hope('1.0').not.equal(true);
  I.hope(new Boolean(true)).not.equal(true);
  I.hope(new Number(1)).not.equal(true);
  I.hope(new String('1.0')).not.equal(true);

  I.hope(false).not.equal(0);
  I.hope(0).not.equal(0);
  I.hope('').not.equal(0);
  I.hope('0.0').not.equal(0);
  I.hope(new Boolean).not.equal(0);
  I.hope(new Number).not.equal(0);
  I.hope(new String).not.equal(0);
  I.hope(new String('0.0')).not.equal(0);

  I.hope(true).not.equal(1);
  I.hope(1).not.equal(1);
  I.hope('1.0').not.equal(1);
  I.hope(new Boolean(true)).not.equal(1);
  I.hope(new Number(1)).not.equal(1);
  I.hope(new String('1.0')).not.equal(1);

  I.hope(1 / 0).not.equal(2 / 0);

  I.hope(false).not.equal('');
  I.hope(0).not.equal('');
  I.hope(new Boolean).not.equal('');
  I.hope(new Number).not.equal('');

  I.hope(false).not.equal('0.0');
  I.hope(0).not.equal('0.0');
  I.hope(new Boolean).not.equal('0.0');
  I.hope(new Number).not.equal('0.0');

  I.hope(true).not.equal('1.0');
  I.hope(1).not.equal('1.0');
  I.hope(new Boolean(true)).not.equal('1.0');
  I.hope(new Number(1)).not.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).not.equal(symbol);

  var the_object = {};
  I.hope(the_object).not.equal(the_object);

  var the_function = function () { };
  I.hope(the_function).not.equal(the_function);

  I.hope(false).equal(undefined);
  I.hope(NaN).equal(undefined);
  I.hope(0).equal(undefined);
  I.hope('').equal(undefined);
  I.hope('0.0').equal(undefined);

  I.hope(false).equal(null);
  I.hope(NaN).equal(null);
  I.hope(0).equal(null);
  I.hope('').equal(null);
  I.hope('0.0').equal(null);

  I.hope(undefined).equal(false);
  I.hope(null).equal(false);
  I.hope(NaN).equal(false);

  I.hope(undefined).equal(NaN);
  I.hope(null).equal(NaN);
  I.hope(false).equal(NaN);
  I.hope(NaN).equal(NaN);
  I.hope(0).equal(NaN);
  I.hope('').equal(NaN);

  I.hope(undefined).equal(0);
  I.hope(null).equal(0);
  I.hope(NaN).equal(0);

  I.hope(undefined).equal('');
  I.hope(null).equal('');

  I.hope(Symbol(0)).equal(Symbol(0));

  I.hope({}).equal({});
  I.hope(function () { }).equal(function () { });


});

