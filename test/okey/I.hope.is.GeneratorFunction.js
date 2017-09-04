I.do('I.hope().is.GeneratorFunction :', function (I) {
  I.hope({}).is.not.GeneratorFunction;
  I.hope(function () { }).is.not.GeneratorFunction;
  I.hope(function* () { }).is.GeneratorFunction;
  I.hope(async function () { }).is.not.GeneratorFunction;

  I.sum();
});