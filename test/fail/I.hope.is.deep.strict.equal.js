I.do('I.hope().is.deep.strict.equal() :', function (I) {
  I.hope(undefined).is.not.deep.strict.equal(undefined);
  I.hope(null).is.not.deep.strict.equal(null);
  I.hope(false).is.not.deep.strict.equal(false);
  I.hope(true).is.not.deep.strict.equal(true);
  I.hope(0).is.not.deep.strict.equal(0);
  I.hope(123).is.not.deep.strict.equal(123);
  I.hope(1 / 0).is.not.deep.strict.equal(2 / 0);
  I.hope('').is.not.deep.strict.equal('');
  I.hope('abc').is.not.deep.strict.equal('abc');
  var symbol = Symbol();
  I.hope(symbol).is.not.deep.strict.equal(symbol);
  I.hope({}).is.not.deep.strict.equal([]);
  I.hope({ 0: { 0: 0 } }).is.not.deep.strict.equal([[0]]);


  I.hope(null).is.deep.strict.equal(undefined);
  I.hope(false).is.deep.strict.equal(undefined);
  I.hope(NaN).is.deep.strict.equal(undefined);
  I.hope(0).is.deep.strict.equal(undefined);
  I.hope('').is.deep.strict.equal(undefined);
  I.hope('0.0').is.deep.strict.equal(undefined);

  I.hope(undefined).is.deep.strict.equal(null);
  I.hope(false).is.deep.strict.equal(null);
  I.hope(NaN).is.deep.strict.equal(null);
  I.hope(0).is.deep.strict.equal(null);
  I.hope('').is.deep.strict.equal(null);
  I.hope('0.0').is.deep.strict.equal(null);

  I.hope(undefined).is.deep.strict.equal(false);
  I.hope(null).is.deep.strict.equal(false);
  I.hope(NaN).is.deep.strict.equal(false);
  I.hope(0).is.deep.strict.equal(false);
  I.hope('').is.deep.strict.equal(false);
  I.hope('0.0').is.deep.strict.equal(false);
  I.hope(new Boolean).is.deep.strict.equal(false);
  I.hope(new Number).is.deep.strict.equal(false);
  I.hope(new String).is.deep.strict.equal(false);
  I.hope(new String('0.0')).is.deep.strict.equal(false);
  I.hope(1).is.deep.strict.equal(true);
  I.hope('1.0').is.deep.strict.equal(true);
  I.hope(new Boolean(true)).is.deep.strict.equal(true);
  I.hope(new Number(1)).is.deep.strict.equal(true);
  I.hope(new String('1.0')).is.deep.strict.equal(true);

  I.hope(undefined).is.deep.strict.equal(NaN);
  I.hope(null).is.deep.strict.equal(NaN);
  I.hope(false).is.deep.strict.equal(NaN);
  I.hope(NaN).is.deep.strict.equal(NaN);
  I.hope(0).is.deep.strict.equal(NaN);
  I.hope('').is.deep.strict.equal(NaN);

  I.hope(undefined).is.deep.strict.equal(0);
  I.hope(null).is.deep.strict.equal(0);
  I.hope(false).is.deep.strict.equal(0);
  I.hope(NaN).is.deep.strict.equal(0);
  I.hope('').is.deep.strict.equal(0);
  I.hope('0.0').is.deep.strict.equal(0);
  I.hope(new Boolean).is.deep.strict.equal(0);
  I.hope(new Number).is.deep.strict.equal(0);
  I.hope(new String).is.deep.strict.equal(0);
  I.hope(new String('0.0')).is.deep.strict.equal(0);
  I.hope(true).is.deep.strict.equal(1);
  I.hope('1.0').is.deep.strict.equal(1);
  I.hope(new Boolean(true)).is.deep.strict.equal(1);
  I.hope(new Number(1)).is.deep.strict.equal(1);
  I.hope(new String('1.0')).is.deep.strict.equal(1);

  I.hope(undefined).is.deep.strict.equal('');
  I.hope(null).is.deep.strict.equal('');
  I.hope(false).is.deep.strict.equal('');
  I.hope(0).is.deep.strict.equal('');
  I.hope(new Boolean).is.deep.strict.equal('');
  I.hope(new Number).is.deep.strict.equal('');
  I.hope(false).is.deep.strict.equal('0.0');
  I.hope(0).is.deep.strict.equal('0.0');
  I.hope(new Boolean).is.deep.strict.equal('0.0');
  I.hope(new Number).is.deep.strict.equal('0.0');
  I.hope(true).is.deep.strict.equal('1.0');
  I.hope(1).is.deep.strict.equal('1.0');
  I.hope(new Boolean(true)).is.deep.strict.equal('1.0');
  I.hope(new Number(1)).is.deep.strict.equal('1.0');

  I.hope(Symbol(0)).is.deep.strict.equal(Symbol(0));

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.not.deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': '1', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 1, '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'b', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.strict.equal(object_b);

  var object_a = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '02': 'c' }, 2: 'c', }, c: 'c' };
  var object_b = { a: 'a', b: { 0: 'a', 1: { '00': 'a', '01': 'B', '02': 'c' }, 2: 'c', }, c: 'c' };
  I.hope(object_a).is.deep.strict.equal(object_b);

  I.hope(/abc/i).is.not.deep.strict.equal(/abc/i);
  I.hope(/abc/g).is.deep.strict.equal(/ABC/);
  

});

