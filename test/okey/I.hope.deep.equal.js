I.do('.deep.equal() asserts:', function (I) {
  I.hope(undefined).deep.equal(undefined);
  I.hope(null).deep.equal(undefined);

  I.hope(undefined).deep.equal(null);
  I.hope(null).deep.equal(null);

  I.hope(false).deep.equal(false);
  I.hope(0).deep.equal(false);
  I.hope('').deep.equal(false);
  I.hope('0.0').deep.equal(false);
  I.hope(new Boolean).deep.equal(false);
  I.hope(new Number).deep.equal(false);
  I.hope(new String).deep.equal(false);
  I.hope(new String('0.0')).deep.equal(false);
  I.hope(true).deep.equal(true);
  I.hope(1).deep.equal(true);
  I.hope('1.0').deep.equal(true);
  I.hope(new Boolean(true)).deep.equal(true);
  I.hope(new Number(1)).deep.equal(true);
  I.hope(new String('1.0')).deep.equal(true);

  I.hope(false).deep.equal(0);
  I.hope(0).deep.equal(0);
  I.hope('').deep.equal(0);
  I.hope('0.0').deep.equal(0);
  I.hope(new Boolean).deep.equal(0);
  I.hope(new Number).deep.equal(0);
  I.hope(new String).deep.equal(0);
  I.hope(new String('0.0')).deep.equal(0);

  I.hope(true).deep.equal(1);
  I.hope(1).deep.equal(1);
  I.hope('1.0').deep.equal(1);
  I.hope(new Boolean(true)).deep.equal(1);
  I.hope(new Number(1)).deep.equal(1);
  I.hope(new String('1.0')).deep.equal(1);

  I.hope(1 / 0).deep.equal(2 / 0);

  I.hope(false).deep.equal('');
  I.hope(0).deep.equal('');
  I.hope(new Boolean).deep.equal('');
  I.hope(new Number).deep.equal('');

  I.hope(false).deep.equal('0.0');
  I.hope(0).deep.equal('0.0');
  I.hope(new Boolean).deep.equal('0.0');
  I.hope(new Number).deep.equal('0.0');

  I.hope(true).deep.equal('1.0');
  I.hope(1).deep.equal('1.0');
  I.hope(new Boolean(true)).deep.equal('1.0');
  I.hope(new Number(1)).deep.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).deep.equal(symbol);

  var the_object = {};
  I.hope(the_object).deep.equal(the_object);
  I.hope({ 0: { 0: 0 } }).deep.equal([[0]]);
  I.hope({ 0: { 0: 0 } }).deep.equal([['0']]);

  I.hope(false).not.deep.equal(undefined);
  I.hope(NaN).not.deep.equal(undefined);
  I.hope(0).not.deep.equal(undefined);
  I.hope('').not.deep.equal(undefined);
  I.hope('0.0').not.deep.equal(undefined);

  I.hope(false).not.deep.equal(null);
  I.hope(NaN).not.deep.equal(null);
  I.hope(0).not.deep.equal(null);
  I.hope('').not.deep.equal(null);
  I.hope('0.0').not.deep.equal(null);

  I.hope(undefined).not.deep.equal(false);
  I.hope(null).not.deep.equal(false);
  I.hope(NaN).not.deep.equal(false);

  I.hope(undefined).not.deep.equal(NaN);
  I.hope(null).not.deep.equal(NaN);
  I.hope(false).not.deep.equal(NaN);
  I.hope(NaN).not.deep.equal(NaN);
  I.hope(0).not.deep.equal(NaN);
  I.hope('').not.deep.equal(NaN);

  I.hope(undefined).not.deep.equal(0);
  I.hope(null).not.deep.equal(0);
  I.hope(NaN).not.deep.equal(0);

  I.hope(undefined).not.deep.equal('');
  I.hope(null).not.deep.equal('');

  I.hope(Symbol(0)).not.deep.equal(Symbol(0));

  I.hope({ 0: { 0: 0 } }).not.deep.equal([['a']]);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': '1', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 1, '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.equal(object_b);

  var array_a = [0,1,2];
  var array_b = [0,1];
  I.hope(array_a).not.deep.equal(array_b);
  I.hope(array_b).not.deep.equal(array_a);
  
  I.sum();
});

