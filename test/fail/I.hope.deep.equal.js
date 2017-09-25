I.do('.deep.equal() asserts:', function (I) {
  I.hope(undefined).not.deep.equal(undefined);
  I.hope(null).not.deep.equal(undefined);

  I.hope(undefined).not.deep.equal(null);
  I.hope(null).not.deep.equal(null);

  I.hope(false).not.deep.equal(false);
  I.hope(0).not.deep.equal(false);
  I.hope('').not.deep.equal(false);
  I.hope('0.0').not.deep.equal(false);
  I.hope(new Boolean).not.deep.equal(false);
  I.hope(new Number).not.deep.equal(false);
  I.hope(new String).not.deep.equal(false);
  I.hope(new String('0.0')).not.deep.equal(false);
  I.hope(true).not.deep.equal(true);
  I.hope(1).not.deep.equal(true);
  I.hope('1.0').not.deep.equal(true);
  I.hope(new Boolean(true)).not.deep.equal(true);
  I.hope(new Number(1)).not.deep.equal(true);
  I.hope(new String('1.0')).not.deep.equal(true);

  I.hope(false).not.deep.equal(0);
  I.hope(0).not.deep.equal(0);
  I.hope('').not.deep.equal(0);
  I.hope('0.0').not.deep.equal(0);
  I.hope(new Boolean).not.deep.equal(0);
  I.hope(new Number).not.deep.equal(0);
  I.hope(new String).not
  
  .deep.equal(0);
  I.hope(new String('0.0')).not.deep.equal(0);

  I.hope(true).not.deep.equal(1);
  I.hope(1).not.deep.equal(1);
  I.hope('1.0').not.deep.equal(1);
  I.hope(new Boolean(true)).not.deep.equal(1);
  I.hope(new Number(1)).not.deep.equal(1);
  I.hope(new String('1.0')).not.deep.equal(1);

  I.hope(1 / 0).not.deep.equal(2 / 0);

  I.hope(false).not.deep.equal('');
  I.hope(0).not.deep.equal('');
  I.hope(new Boolean).not.deep.equal('');
  I.hope(new Number).not.deep.equal('');

  I.hope(false).not.deep.equal('0.0');
  I.hope(0).not.deep.equal('0.0');
  I.hope(new Boolean).not.deep.equal('0.0');
  I.hope(new Number).not.deep.equal('0.0');

  I.hope(true).not.deep.equal('1.0');
  I.hope(1).not.deep.equal('1.0');
  I.hope(new Boolean(true)).not.deep.equal('1.0');
  I.hope(new Number(1)).not.deep.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).not.deep.equal(symbol);

  var the_object = {};
  I.hope(the_object).not.deep.equal(the_object);
  I.hope({ 0: { 0: 0 } }).not.deep.equal([[0]]);
  I.hope({ 0: { 0: 0 } }).not.deep.equal([['0']]);

  I.hope(false).deep.equal(undefined);
  I.hope(NaN).deep.equal(undefined);
  I.hope(0).deep.equal(undefined);
  I.hope('').deep.equal(undefined);
  I.hope('0.0').deep.equal(undefined);

  I.hope(false).deep.equal(null);
  I.hope(NaN).deep.equal(null);
  I.hope(0).deep.equal(null);
  I.hope('').deep.equal(null);
  I.hope('0.0').deep.equal(null);

  I.hope(undefined).deep.equal(false);
  I.hope(null).deep.equal(false);
  I.hope(NaN).deep.equal(false);

  I.hope(undefined).deep.equal(NaN);
  I.hope(null).deep.equal(NaN);
  I.hope(false).deep.equal(NaN);
  I.hope(NaN).deep.equal(NaN);
  I.hope(0).deep.equal(NaN);
  I.hope('').deep.equal(NaN);

  I.hope(undefined).deep.equal(0);
  I.hope(null).deep.equal(0);
  I.hope(NaN).deep.equal(0);

  I.hope(undefined).deep.equal('');
  I.hope(null).deep.equal('');

  I.hope(Symbol(0)).deep.equal(Symbol(0));

  I.hope({ 0: { 0: 0 } }).deep.equal([['a']]);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': '1', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 1, '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).deep.equal(object_b);

  var array_a = [0,1,2];
  var array_b = [0,1];
  I.hope(array_a).deep.equal(array_b);
  I.hope(array_b).deep.equal(array_a);

  I.sum();
});

