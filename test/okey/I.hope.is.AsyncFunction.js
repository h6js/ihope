I.do('I.hope().is.AsyncFunction :', function (I) {
  I.hope({}).is.not.AsyncFunction;
  I.hope(function () { }).is.not.AsyncFunction;
  I.hope(function* () { }).is.not.AsyncFunction;
  I.hope(async function () { }).is.AsyncFunction;


});