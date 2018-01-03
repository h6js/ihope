I.do('I.hope().throw() :', function (I) {
  I.hope(function () { }).not.throw();
  I.hope(function () { throw undefined }).throw();
  I.hope(function () { throw null }).throw();
  I.hope(function () { throw true }).throw();
  I.hope(function () { throw NaN }).throw();
  I.hope(function () { throw 123 }).throw();
  I.hope(function () { throw 'wrong' }).throw();
  I.hope(function () { throw Symbol() }).throw();
  I.hope(function () { throw Error() }).throw();

  I.hope(function () { }).not.throw(undefined);
  I.hope(function () { throw undefined }).throw(undefined);
  I.hope(function () { throw null }).not.throw(undefined);
  I.hope(function () { throw true }).not.throw(undefined);
  I.hope(function () { throw NaN }).not.throw(undefined);
  I.hope(function () { throw 123 }).not.throw(undefined);
  I.hope(function () { throw 'wrong' }).not.throw(undefined);
  I.hope(function () { throw Symbol() }).not.throw(undefined);
  I.hope(function () { throw Error() }).not.throw(undefined);

  I.hope(function () { }).not.throw(null);
  I.hope(function () { throw undefined }).not.throw(null);
  I.hope(function () { throw null }).throw(null);
  I.hope(function () { throw true }).not.throw(null);
  I.hope(function () { throw NaN }).not.throw(null);
  I.hope(function () { throw 123 }).not.throw(null);
  I.hope(function () { throw 'wrong' }).not.throw(null);
  I.hope(function () { throw Symbol() }).not.throw(null);
  I.hope(function () { throw Error() }).not.throw(null);

  I.hope(function () { }).not.throw(true);
  I.hope(function () { throw undefined }).not.throw(true);
  I.hope(function () { throw null }).not.throw(true);
  I.hope(function () { throw false }).not.throw(true);
  I.hope(function () { throw true }).throw(true);
  I.hope(function () { throw NaN }).not.throw(true);
  I.hope(function () { throw 123 }).not.throw(true);
  I.hope(function () { throw 'wrong' }).not.throw(true);
  I.hope(function () { throw Symbol() }).not.throw(true);
  I.hope(function () { throw Error() }).not.throw(true);

  I.hope(function () { }).not.throw(123);
  I.hope(function () { throw undefined }).not.throw(123);
  I.hope(function () { throw null }).not.throw(123);
  I.hope(function () { throw false }).not.throw(123);
  I.hope(function () { throw true }).not.throw(123);
  I.hope(function () { throw NaN }).not.throw(123);
  I.hope(function () { throw 456 }).not.throw(123);
  I.hope(function () { throw 123 }).throw(123);
  I.hope(function () { throw 'wrong' }).not.throw(123);
  I.hope(function () { throw Symbol() }).not.throw(123);
  I.hope(function () { throw Error() }).not.throw(123);

  I.hope(function () { }).not.throw('wrong');
  I.hope(function () { throw undefined }).not.throw('wrong');
  I.hope(function () { throw null }).not.throw('wrong');
  I.hope(function () { throw false }).not.throw('wrong');
  I.hope(function () { throw true }).not.throw('wrong');
  I.hope(function () { throw NaN }).not.throw('wrong');
  I.hope(function () { throw 123 }).not.throw('wrong');
  I.hope(function () { throw 'wrong' }).throw('wrong');
  I.hope(function () { throw 'good' }).not.throw('wrong');
  I.hope(function () { throw Symbol() }).not.throw('wrong');
  I.hope(function () { throw Error() }).not.throw('wrong');
  I.hope(function () { throw Error('wrong') }).throw('wrong');
  I.hope(function () { throw Error('good') }).not.throw('wrong');

  I.hope(function () { }).not.throw(Error);
  I.hope(function () { throw undefined }).not.throw(Error);
  I.hope(function () { throw null }).not.throw(Error);
  I.hope(function () { throw false }).not.throw(Error);
  I.hope(function () { throw true }).not.throw(Error);
  I.hope(function () { throw NaN }).not.throw(Error);
  I.hope(function () { throw 123 }).not.throw(Error);
  I.hope(function () { throw 'wrong' }).not.throw(Error);
  I.hope(function () { throw Symbol() }).not.throw(Error);
  I.hope(function () { throw Error() }).throw(Error);
  I.hope(function () { throw Error() }).not.throw(TypeError);
  I.hope(function () { throw TypeError() }).throw(Error);


});

I.do('I.hope(f,...).throw() :', function (I) {
  function helloworld(hello, world) {
    throw hello+' '+world;
  }
  
  I.hope(helloworld, 'hello', 'world').throw('hello world');


});

I.do('I.hope.throw() in generator function:', function* (I) {
  yield I.hope(function () { }).not.throw(Error);
  yield I.hope(function () { throw undefined }).not.throw(Error);
  yield I.hope(function () { throw null }).not.throw(Error);
  yield I.hope(function () { throw false }).not.throw(Error);
  yield I.hope(function () { throw true }).not.throw(Error);
  yield I.hope(function () { throw NaN }).not.throw(Error);
  yield I.hope(function () { throw 123 }).not.throw(Error);
  yield I.hope(function () { throw 'wrong' }).not.throw(Error);
  yield I.hope(function () { throw Symbol() }).not.throw(Error);
  yield I.hope(function () { throw Error() }).throw(Error);
  yield I.hope(function () { throw Error() }).not.throw(TypeError);
  yield I.hope(function () { throw TypeError() }).throw(Error);


});

I.do('I.hope().throw(Error) in async function:', async function (I) {
  await I.hope(function () { }).not.throw(Error);
  await I.hope(function () { throw undefined }).not.throw(Error);
  await I.hope(function () { throw null }).not.throw(Error);
  await I.hope(function () { throw false }).not.throw(Error);
  await I.hope(function () { throw true }).not.throw(Error);
  await I.hope(function () { throw NaN }).not.throw(Error);
  await I.hope(function () { throw 123 }).not.throw(Error);
  await I.hope(function () { throw 'wrong' }).not.throw(Error);
  await I.hope(function () { throw Symbol() }).not.throw(Error);
  await I.hope(function () { throw Error() }).throw(Error);
  await I.hope(function () { throw Error() }).not.throw(TypeError);
  await I.hope(function () { throw TypeError() }).throw(Error);


});