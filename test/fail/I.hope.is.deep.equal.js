I.do('I.hope().is.deep.equal() asserts:', function (I) {
  I.hope(undefined).is.not.deep.equal(undefined);
  I.hope(null).is.not.deep.equal(undefined);

  I.hope(undefined).is.not.deep.equal(null);
  I.hope(null).is.not.deep.equal(null);

  I.hope(false).is.not.deep.equal(false);
  I.hope(0).is.not.deep.equal(false);
  I.hope('').is.not.deep.equal(false);
  I.hope('0.0').is.not.deep.equal(false);
  I.hope(new Boolean).is.not.deep.equal(false);
  I.hope(new Number).is.not.deep.equal(false);
  I.hope(new String).is.not.deep.equal(false);
  I.hope(new String('0.0')).is.not.deep.equal(false);
  I.hope(true).is.not.deep.equal(true);
  I.hope(1).is.not.deep.equal(true);
  I.hope('1.0').is.not.deep.equal(true);
  I.hope(new Boolean(true)).is.not.deep.equal(true);
  I.hope(new Number(1)).is.not.deep.equal(true);
  I.hope(new String('1.0')).is.not.deep.equal(true);

  I.hope(false).is.not.deep.equal(0);
  I.hope(0).is.not.deep.equal(0);
  I.hope('').is.not.deep.equal(0);
  I.hope('0.0').is.not.deep.equal(0);
  I.hope(new Boolean).is.not.deep.equal(0);
  I.hope(new Number).is.not.deep.equal(0);
  I.hope(new String).is.not.deep.equal(0);
  I.hope(new String('0.0')).is.not.deep.equal(0);

  I.hope(true).is.not.deep.equal(1);
  I.hope(1).is.not.deep.equal(1);
  I.hope('1.0').is.not.deep.equal(1);
  I.hope(new Boolean(true)).is.not.deep.equal(1);
  I.hope(new Number(1)).is.not.deep.equal(1);
  I.hope(new String('1.0')).is.not.deep.equal(1);

  I.hope(false).is.not.deep.equal('');
  I.hope(0).is.not.deep.equal('');
  I.hope(new Boolean).is.not.deep.equal('');
  I.hope(new Number).is.not.deep.equal('');

  I.hope(false).is.not.deep.equal('0.0');
  I.hope(0).is.not.deep.equal('0.0');
  I.hope(new Boolean).is.not.deep.equal('0.0');
  I.hope(new Number).is.not.deep.equal('0.0');

  I.hope(true).is.not.deep.equal('1.0');
  I.hope(1).is.not.deep.equal('1.0');
  I.hope(new Boolean(true)).is.not.deep.equal('1.0');
  I.hope(new Number(1)).is.not.deep.equal('1.0');

  var symbol = Symbol();
  I.hope(symbol).is.not.deep.equal(symbol);

  var the_object = {};
  I.hope(the_object).is.not.deep.equal(the_object);
  I.hope({ 0: { 0: 0 } }).is.not.deep.equal([[0]]);
  I.hope({ 0: { 0: 0 } }).is.not.deep.equal([['0']]);

  I.hope(false).is.deep.equal(undefined);
  I.hope(NaN).is.deep.equal(undefined);
  I.hope(0).is.deep.equal(undefined);
  I.hope('').is.deep.equal(undefined);
  I.hope('0.0').is.deep.equal(undefined);

  I.hope(false).is.deep.equal(null);
  I.hope(NaN).is.deep.equal(null);
  I.hope(0).is.deep.equal(null);
  I.hope('').is.deep.equal(null);
  I.hope('0.0').is.deep.equal(null);

  I.hope(undefined).is.deep.equal(false);
  I.hope(null).is.deep.equal(false);
  I.hope(NaN).is.deep.equal(false);

  I.hope(undefined).is.deep.equal(NaN);
  I.hope(null).is.deep.equal(NaN);
  I.hope(false).is.deep.equal(NaN);
  I.hope(NaN).is.deep.equal(NaN);
  I.hope(0).is.deep.equal(NaN);
  I.hope('').is.deep.equal(NaN);

  I.hope(undefined).is.deep.equal(0);
  I.hope(null).is.deep.equal(0);
  I.hope(NaN).is.deep.equal(0);

  I.hope(undefined).is.deep.equal('');
  I.hope(null).is.deep.equal('');

  I.hope(Symbol(0)).is.deep.equal(Symbol(0));

  I.hope({ 0: { 0: 0 } }).is.deep.equal([['a']]);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': '1', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 1, '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.not.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.equal(object_b);

  I.sum();
});

