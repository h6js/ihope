(function(){
  const cases="";
  this.addEventListener("load", function(){
    var tests = cases.split(",");
    var body = document.body;
    for(var i=0, test; test=tests[i]; i++) {
      var script = document.createElement("script");
      script.setAttribute("src", test);
      body.appendChild(script);
    }
    // script = document.createElement("script");
    // script.text = "I.run()";
    // body.appendChild(script);
    script.addEventListener("load", function(){
      I.run();
    });
  });
})();