#!/usr/bin/env node

/** -------------------------------------------------------------------------------------------------------------------
 * it.js
 *  Usage:
 *    it [-<agent>] [page.html] test.js [ ... tests.js]
 */

 (function (global, window, Function, Object, String, Array, RegExp, Date, Error, Promise) {
  global = this; window = global.window;

  //#include main.js
  //#include server.js

  global.I = newI(null, "");  // 创建全局的 I，共测试程序使用


  if (global.window) { // 当前运行在浏览器环境中
    global.addEventListener("load", main);
    I.path = location.pathname;
    I.exit = (code) => remote("exit", code);
  }
  else {  // 当前运行在 nodejs 环境中
    var argv = process.argv.slice(2), agent;

    var page = argv[0];
    if(page[0]==="-") {
      argv = argv.slice(1);
      if(!argv.length) help();
      agent = page.slice(1);
      page = argv[0];
    }

    if(page.endsWith(".html")) {
      argv = argv.slice(1);
      if(!argv.length) help();
      if(!agent) agent = "default";
    }
    else {
      page = "";
    }

    if (agent) {  // 服务器远端测试
      Server(agent, page, argv);
    }
    else {   // nodejs 环境中测试
      const path = require("path");
      const fs = require("fs");
      const cwd = process.cwd();
      for (var i = 0; i < argv.length; i++) {
        var file = I.path = path.resolve(cwd, argv[i]);
        var code = fs.readFileSync(file, { codding: "utf-8" });
        code += "\n//# sourceURL=" + file;
        global.eval(code);
      }
      process.nextTick(main);
    }
  }

  function help() {
    log("Usage:\n  it [-<agent>] [page.html] test.js [ ... ]\n");
    process.exit(-1);
  }
  
  
})(0, 0, Function, Object, String, Array, RegExp, Date, Error, Promise);
