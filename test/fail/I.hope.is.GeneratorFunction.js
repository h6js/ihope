I.do('I.hope().is.GeneratorFunction :', function (I) {
  I.hope({}).is.GeneratorFunction;
  I.hope(function () { }).is.GeneratorFunction;
  I.hope(function* () { }).is.not.GeneratorFunction;
  I.hope(async function () { }).is.GeneratorFunction;


});