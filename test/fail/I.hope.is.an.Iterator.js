I.do('I.hope().is.an.Iterator :', function (I) {
  I.hope({}).is.an.Iterator;
  I.hope(''[Symbol.iterator]()).is.not.an.Iterator;
  I.hope([][Symbol.iterator]()).is.not.an.Iterator;
  I.hope(function* () { }()).is.not.an.Iterator;

  I.sum();
});