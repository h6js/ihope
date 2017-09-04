I.do('I.hope().is.an.AsyncFunction :', function (I) {
  I.hope({}).is.not.an.AsyncFunction;
  I.hope(function () { }).is.not.an.AsyncFunction;
  I.hope(function* () { }).is.not.an.AsyncFunction;
  I.hope(async function () { }).is.an.AsyncFunction;

  I.sum();
});