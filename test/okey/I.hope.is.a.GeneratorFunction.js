I.do('I.hope.a.GeneratorFunction :', function (I) {
  I.hope({}).is.not.a.GeneratorFunction;
  I.hope(function () { }).is.not.a.GeneratorFunction;
  I.hope(function* () { }).is.a.GeneratorFunction;
  I.hope(async function () { }).is.not.a.GeneratorFunction;

  I.sum();
});