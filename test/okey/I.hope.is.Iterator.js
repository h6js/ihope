I.do('I.hope().is.Iterator :', function (I) {
  I.hope({}).is.not.Iterator;
  I.hope(''[Symbol.iterator]()).is.Iterator;
  I.hope([][Symbol.iterator]()).is.Iterator;
  I.hope(function* () { }()).is.Iterator;

  I.sum();
});