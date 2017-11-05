I.do('I.hope().deep.strict.equal() :', function (I) {
  I.hope(undefined).not.deep.strict.equal(undefined);
  I.hope(null).not.deep.strict.equal(null);
  I.hope(false).not.deep.strict.equal(false);
  I.hope(true).not.deep.strict.equal(true);
  I.hope(0).not.deep.strict.equal(0);
  I.hope(123).not.deep.strict.equal(123);
  I.hope(1 / 0).not.deep.strict.equal(2 / 0);
  I.hope('').not.deep.strict.equal('');
  I.hope('abc').not.deep.strict.equal('abc');
  var symbol = Symbol();
  I.hope(symbol).not.deep.strict.equal(symbol);
  I.hope({}).not.deep.strict.equal([]);
  I.hope({ 0: { 0: 0 } }).not.deep.strict.equal([[0]]);


  I.hope(null).deep.strict.equal(undefined);
  I.hope(false).deep.strict.equal(undefined);
  I.hope(NaN).deep.strict.equal(undefined);
  I.hope(0).deep.strict.equal(undefined);
  I.hope('').deep.strict.equal(undefined);
  I.hope('0.0').deep.strict.equal(undefined);

  I.hope(undefined).deep.strict.equal(null);
  I.hope(false).deep.strict.equal(null);
  I.hope(NaN).deep.strict.equal(null);
  I.hope(0).deep.strict.equal(null);
  I.hope('').deep.strict.equal(null);
  I.hope('0.0').deep.strict.equal(null);

  I.hope(undefined).deep.strict.equal(false);
  I.hope(null).deep.strict.equal(false);
  I.hope(NaN).deep.strict.equal(false);
  I.hope(0).deep.strict.equal(false);
  I.hope('').deep.strict.equal(false);
  I.hope('0.0').deep.strict.equal(false);
  I.hope(new Boolean).deep.strict.equal(false);
  I.hope(new Number).deep.strict.equal(false);
  I.hope(new String).deep.strict.equal(false);
  I.hope(new String('0.0')).deep.strict.equal(false);
  I.hope(1).deep.strict.equal(true);
  I.hope('1.0').deep.strict.equal(true);
  I.hope(new Boolean(true)).deep.strict.equal(true);
  I.hope(new Number(1)).deep.strict.equal(true);
  I.hope(new String('1.0')).deep.strict.equal(true);

  I.hope(undefined).deep.strict.equal(NaN);
  I.hope(null).deep.strict.equal(NaN);
  I.hope(false).deep.strict.equal(NaN);
  I.hope(NaN).deep.strict.equal(NaN);
  I.hope(0).deep.strict.equal(NaN);
  I.hope('').deep.strict.equal(NaN);

  I.hope(undefined).deep.strict.equal(0);
  I.hope(null).deep.strict.equal(0);
  I.hope(false).deep.strict.equal(0);
  I.hope(NaN).deep.strict.equal(0);
  I.hope('').deep.strict.equal(0);
  I.hope('0.0').deep.strict.equal(0);
  I.hope(new Boolean).deep.strict.equal(0);
  I.hope(new Number).deep.strict.equal(0);
  I.hope(new String).deep.strict.equal(0);
  I.hope(new String('0.0')).deep.strict.equal(0);
  I.hope(true).deep.strict.equal(1);
  I.hope('1.0').deep.strict.equal(1);
  I.hope(new Boolean(true)).deep.strict.equal(1);
  I.hope(new Number(1)).deep.strict.equal(1);
  I.hope(new String('1.0')).deep.strict.equal(1);

  I.hope(undefined).deep.strict.equal('');
  I.hope(null).deep.strict.equal('');
  I.hope(false).deep.strict.equal('');
  I.hope(0).deep.strict.equal('');
  I.hope(new Boolean).deep.strict.equal('');
  I.hope(new Number).deep.strict.equal('');
  I.hope(false).deep.strict.equal('0.0');
  I.hope(0).deep.strict.equal('0.0');
  I.hope(new Boolean).deep.strict.equal('0.0');
  I.hope(new Number).deep.strict.equal('0.0');
  I.hope(true).deep.strict.equal('1.0');
  I.hope(1).deep.strict.equal('1.0');
  I.hope(new Boolean(true)).deep.strict.equal('1.0');
  I.hope(new Number(1)).deep.strict.equal('1.0');

  I.hope(Symbol(0)).deep.strict.equal(Symbol(0));

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': '1', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 1, '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.strict.equal(object_b);

  I.hope(/abc/i).not.deep.strict.equal(/abc/i);
  I.hope(/abc/g).deep.strict.equal(/ABC/);

  I.sum();
});

