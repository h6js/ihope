I.do('.say().as() :', function (I) {
  I.say('It is ok!').as(true).is.ok;
  I.say('It is not ok!').as(false).is.not.ok;

  I.sum();
});

