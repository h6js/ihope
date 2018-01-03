I.do('I.hope().is.an.AsyncFunction :', function (I) {
  I.hope({}).is.an.AsyncFunction;
  I.hope(function () { }).is.an.AsyncFunction;
  I.hope(function* () { }).is.an.AsyncFunction;
  I.hope(async function () { }).is.not.an.AsyncFunction;


});