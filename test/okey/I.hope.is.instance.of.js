I.do('I.hope().is.instance.of() :', function (I) {
  class Person { };
  class Boy extends Person { };
  class Girl extends Person { };
  person = new Person;
  boy = new Boy;
  girl = new Girl;

  I.hope(person).is.instance.of(Object);
  I.hope(boy).is.instance.of(Object);
  I.hope(girl).is.instance.of(Object);

  I.hope({}).is.not.instance.of(Person);
  I.hope(person).is.instance.of(Person);
  I.hope(boy).is.instance.of(Person);
  I.hope(girl).is.instance.of(Person);

  I.hope({}).is.not.instance.of(Boy);
  I.hope(person).is.not.instance.of(Boy);
  I.hope(boy).is.instance.of(Boy);
  I.hope(girl).is.not.instance.of(Boy);

  I.hope({}).is.not.instance.of(Girl);
  I.hope(person).is.not.instance.of(Girl);
  I.hope(boy).is.not.instance.of(Girl);
  I.hope(girl).is.instance.of(Girl);

  I.sum();
});