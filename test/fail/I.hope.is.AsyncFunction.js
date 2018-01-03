I.do('I.hope().is.AsyncFunction :', function (I) {
  I.hope({}).is.AsyncFunction;
  I.hope(function () { }).is.AsyncFunction;
  I.hope(function* () { }).is.AsyncFunction;
  I.hope(async function () { }).is.not.AsyncFunction;


});