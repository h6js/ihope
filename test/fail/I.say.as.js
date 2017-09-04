I.do('.say().as() :', function (I) {
  I.say('It is ok!').as(true).is.not.ok;
  I.say('It is not ok!').as(false).is.ok;

  I.sum();
});

