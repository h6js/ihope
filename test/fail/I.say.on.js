I.do('.say().on() asserts:', function (I) {
  I.say('It works!').on(function () { throw Error('unknown') });

  I.sum();
});
