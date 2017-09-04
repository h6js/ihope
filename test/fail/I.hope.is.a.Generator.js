I.do('I.hope.a.Generator :', function(I){
    I.hope({}).is.a.Generator;
    I.hope(function*(){}()).is.not.a.Generator;
    
    I.sum();
});