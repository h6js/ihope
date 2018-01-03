I.do('I.hope().is.an.instance.of() :', function (I) {
  class Person { };
  class Boy extends Person { };
  class Girl extends Person { };
  person = new Person;
  boy = new Boy;
  girl = new Girl;

  I.hope(person).is.not.an.instance.of(Object);
  I.hope(boy).is.not.an.instance.of(Object);
  I.hope(girl).is.not.an.instance.of(Object);

  I.hope({}).is.an.instance.of(Person);
  I.hope(person).is.not.an.instance.of(Person);
  I.hope(boy).is.not.an.instance.of(Person);
  I.hope(girl).is.not.an.instance.of(Person);

  I.hope({}).is.an.instance.of(Boy);
  I.hope(person).is.an.instance.of(Boy);
  I.hope(boy).is.not.an.instance.of(Boy);
  I.hope(girl).is.an.instance.of(Boy);

  I.hope({}).is.an.instance.of(Girl);
  I.hope(person).is.an.instance.of(Girl);
  I.hope(boy).is.an.instance.of(Girl);
  I.hope(girl).is.not.an.instance.of(Girl);

  I.hope({}).is.an.instance.of(undefined);
  I.hope({}).is.not.an.instance.of(undefined);
  

});