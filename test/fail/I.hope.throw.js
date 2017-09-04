I.do('I.hope().throw() :', function (I) {
  I.hope(function () { }).throw();
  I.hope(function () { throw undefined }).not.throw();
  I.hope(function () { throw null }).not.throw();
  I.hope(function () { throw true }).not.throw();
  I.hope(function () { throw NaN }).not.throw();
  I.hope(function () { throw 123 }).not.throw();
  I.hope(function () { throw 'wrong' }).not.throw();
  I.hope(function () { throw Symbol() }).not.throw();
  I.hope(function () { throw Error() }).not.throw();

  I.hope(function () { }).throw(undefined);
  I.hope(function () { throw undefined }).not.throw(undefined);
  I.hope(function () { throw null }).throw(undefined);
  I.hope(function () { throw true }).throw(undefined);
  I.hope(function () { throw NaN }).throw(undefined);
  I.hope(function () { throw 123 }).throw(undefined);
  I.hope(function () { throw 'wrong' }).throw(undefined);
  I.hope(function () { throw Symbol() }).throw(undefined);
  I.hope(function () { throw Error() }).throw(undefined);

  I.hope(function () { }).throw(null);
  I.hope(function () { throw undefined }).throw(null);
  I.hope(function () { throw null }).not.throw(null);
  I.hope(function () { throw true }).throw(null);
  I.hope(function () { throw NaN }).throw(null);
  I.hope(function () { throw 123 }).throw(null);
  I.hope(function () { throw 'wrong' }).throw(null);
  I.hope(function () { throw Symbol() }).throw(null);
  I.hope(function () { throw Error() }).throw(null);

  I.hope(function () { }).throw(true);
  I.hope(function () { throw undefined }).throw(true);
  I.hope(function () { throw null }).throw(true);
  I.hope(function () { throw false }).throw(true);
  I.hope(function () { throw true }).not.throw(true);
  I.hope(function () { throw NaN }).throw(true);
  I.hope(function () { throw 123 }).throw(true);
  I.hope(function () { throw 'wrong' }).throw(true);
  I.hope(function () { throw Symbol() }).throw(true);
  I.hope(function () { throw Error() }).throw(true);

  I.hope(function () { }).throw(123);
  I.hope(function () { throw undefined }).throw(123);
  I.hope(function () { throw null }).throw(123);
  I.hope(function () { throw false }).throw(123);
  I.hope(function () { throw true }).throw(123);
  I.hope(function () { throw NaN }).throw(123);
  I.hope(function () { throw 456 }).throw(123);
  I.hope(function () { throw 123 }).not.throw(123);
  I.hope(function () { throw 'wrong' }).throw(123);
  I.hope(function () { throw Symbol() }).throw(123);
  I.hope(function () { throw Error() }).throw(123);

  I.hope(function () { }).throw('wrong');
  I.hope(function () { throw undefined }).throw('wrong');
  I.hope(function () { throw null }).throw('wrong');
  I.hope(function () { throw false }).throw('wrong');
  I.hope(function () { throw true }).throw('wrong');
  I.hope(function () { throw NaN }).throw('wrong');
  I.hope(function () { throw 123 }).throw('wrong');
  I.hope(function () { throw 'wrong' }).not.throw('wrong');
  I.hope(function () { throw 'good' }).throw('wrong');
  I.hope(function () { throw Symbol() }).throw('wrong');
  I.hope(function () { throw Error() }).throw('wrong');
  I.hope(function () { throw Error('wrong') }).not.throw('wrong');
  I.hope(function () { throw Error('good') }).throw('wrong');

  I.hope(function () { }).throw(Error);
  I.hope(function () { throw undefined }).throw(Error);
  I.hope(function () { throw null }).throw(Error);
  I.hope(function () { throw false }).throw(Error);
  I.hope(function () { throw true }).throw(Error);
  I.hope(function () { throw NaN }).throw(Error);
  I.hope(function () { throw 123 }).throw(Error);
  I.hope(function () { throw 'wrong' }).throw(Error);
  I.hope(function () { throw Symbol() }).throw(Error);
  I.hope(function () { throw Error() }).not.throw(Error);
  I.hope(function () { throw Error() }).throw(TypeError);
  I.hope(function () { throw TypeError() }).not.throw(Error);

  I.sum();
});

I.do('I.hope.throw() in generator function:', function* (I) {
  yield I.hope(function () { }).throw(Error);
  yield I.hope(function () { throw undefined }).throw(Error);
  yield I.hope(function () { throw null }).throw(Error);
  yield I.hope(function () { throw false }).throw(Error);
  yield I.hope(function () { throw true }).throw(Error);
  yield I.hope(function () { throw NaN }).throw(Error);
  yield I.hope(function () { throw 123 }).throw(Error);
  yield I.hope(function () { throw 'wrong' }).throw(Error);
  yield I.hope(function () { throw Symbol() }).throw(Error);
  yield I.hope(function () { throw Error() }).not.throw(Error);
  yield I.hope(function () { throw Error() }).throw(TypeError);
  yield I.hope(function () { throw TypeError() }).not.throw(Error);

  I.sum();
});

I.do('I.hope().throw(Error) in async function:', async function (I) {
  await I.hope(function () { }).throw(Error);
  await I.hope(function () { throw undefined }).throw(Error);
  await I.hope(function () { throw null }).throw(Error);
  await I.hope(function () { throw false }).throw(Error);
  await I.hope(function () { throw true }).throw(Error);
  await I.hope(function () { throw NaN }).throw(Error);
  await I.hope(function () { throw 123 }).throw(Error);
  await I.hope(function () { throw 'wrong' }).throw(Error);
  await I.hope(function () { throw Symbol() }).throw(Error);
  await I.hope(function () { throw Error() }).not.throw(Error);
  await I.hope(function () { throw Error() }).throw(TypeError);
  await I.hope(function () { throw TypeError() }).not.throw(Error);

  I.sum();
});