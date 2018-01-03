I.do('I.hope().is.Iterator :', function (I) {
  I.hope({}).is.Iterator;
  I.hope(''[Symbol.iterator]()).is.not.Iterator;
  I.hope([][Symbol.iterator]()).is.not.Iterator;
  I.hope(function* () { }()).is.not.Iterator;


});