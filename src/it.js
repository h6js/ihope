/** -------------------------------------------------------------------------------------------------------------------
 * it.js
 */

(function (global, window, Function, Object, String, Array, RegExp, Date, Error, Promise) {
  global = this; window = global.window;
  const currentScript = document.currentScript;
  const cases = currentScript.getAttribute("tests");
  const debug = currentScript.hasAttribute("debug");
  if(!debug) document.head.removeChild(currentScript);

  //#define BROWSER = 1
  //#include ./main.js
  //#include ./server.js

  this.onerror = function(message, source, lineno, colno, error) {
    log("#e%s", message);
  }

  var I = currentScript.getAttribute("name") || "I";

  I = global[I] = newI(null, "");  // 创建全局的 I，共测试程序使用
  I.path = location.pathname;

  global.addEventListener("load", async function () {
    if (cases)
      try {
        var tests = cases.split(",");
        for (var i = 0; i < tests.length; i++)
          await execScript(tests[i]);
        await I.run();
        var errs = errors(I);
      }
      catch (e) {
        log("#eUncaught %s: %s", e.name, e.message);
        errs = -1;
      }
      finally {
        if (!debug) {
          server("exit", errs);
          this.close();
        }
      }
    else {
      await I.run();
      var errs = errors(I);
      if (errs) {
        log("#eTOTAL ERRORS: %d !", errs)
      }
      else {
        log("#sALL SUCCESSFUL!")
      }
    }

  });

  async function execScript(src) {
    return new Promise(function (resolve) {
      var script = document.createElement("script");
      script.onload = resolve;
      script.src = src;
      try { document.head.appendChild(script) }
      finally { if(!debug) document.head.removeChild(script) }
    });
  }
})(0, 0, Function, Object, String, Array, RegExp, Date, Error, Promise);
