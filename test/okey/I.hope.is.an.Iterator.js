I.do('I.hope().is.an.Iterator :', function (I) {
  I.hope({}).is.not.an.Iterator;
  I.hope(''[Symbol.iterator]()).is.an.Iterator;
  I.hope([][Symbol.iterator]()).is.an.Iterator;
  I.hope(function* () { }()).is.an.Iterator;


});