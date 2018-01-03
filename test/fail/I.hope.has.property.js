I.do('I.hope().has.property() :', function (I) {
  var person = { name: 'leadzen' };
  Object.defineProperty(person, '_id', { value: 1, enumerable: 0 });
  var worker = { salary: 8888 };
  Object.defineProperty(worker, '_id', { value: 2, enumerable: 0 });
  Object.setPrototypeOf(worker, person);

  I.hope(worker).has.no.property('_id');
  I.hope(worker).has.no.property('name');
  I.hope(worker).has.no.property('salary');
  I.hope(worker).has.property('age');

  I.hope(123).has.property('any');
  I.hope(123).has.no.property('any');


});
