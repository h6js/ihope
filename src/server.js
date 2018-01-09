//#include macrojs

/** -------------------------------------------------------------------------------------------------------------------
 * server.js
 */

//#if (BROWSER) {
function Server() {
  var xhr = new XMLHttpRequest;
  var url = location.protocol + "//" + location.host + "//";

  return function (oper, value) {
    xhr.open("GET", url, false);
    xhr.setRequestHeader("oper", oper);
    xhr.setRequestHeader("value", encodeURIComponent(value));
    xhr.send();
  }
};
//#}
//#if (CLI) {
//#define ITJS @../it.js
//#define AUTOJS @./auto.js

const it = ITJS;
const auto = AUTOJS;

function Server(agent, page, tests) {
  var http = require("http");
  var fs = require("fs");
  var path = require("path");
  var cwd = process.cwd() + "/";

  var mime = {
    ".js": "text/javascript; charset=utf-8",
    ".html": "text/html; charset=utf-8"
  };

  var operates = {
    log: console.log.bind(console),
    exit: process.exit.bind(process)
  }

  var server = http.createServer(service);

  server.on("clientError", function (err) {
    log("#eclientError: %s", err.code);
  });

  server.listen(8080, function () {
    server.port = server.address().port;
    console.log("Web Server running at http://localhost:" + server.port + "/");
  });

  const agents = {
    default: "open ",
    chrome: 'open -a "/Applications/Google Chrome.app" -n --args ',
    firefox: "open -a Firefox ",
    opera: "open -a Opera ",
    safari: "open -a Safari "
  };

  var agent = agents[agent] || "open ";

  var command = agent + "http://localhost:8080/" + (page || "") + "?test=" + tests.join(",");
  const exec = require("child_process").exec;
  exec(command);

  function service(req, res) {
    var url = req.url.slice(1), headers = req.headers;
    if (url == "/") {
      res.end();
      var oper = headers.oper;
      if (operate = operates[oper]) {
        operate(decodeURIComponent(headers.value));
      }
      else {
        console.error("Unknown oper:", oper);
      }
      return;
    }
    if (url === "it.js") {
      res.setHeader("Content-Type", "text/javascript; charset=utf-8");
      return res.end(it);
    }
    if ( url === "favicon.ico")
      return res.end();
    try {
      var segs = url.split('?');
      url = segs[0];
      if (headers.referer) {
        var type = mime[path.extname(url)];
        if (type)
          res.setHeader("Content-Type", type);
        if (url.endsWith(".js")) {
          segs = macro("./" + url, cwd);
        }
        else {
          segs = fs.readFileSync(url);
        }
        res.write(segs);
        res.end();
      }
      else {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        var qry = segs[1];
        if (qry) {
          segs = qry.split("&");
          for (var i = 0; i < segs.length; i++) {
            qry = segs[i];
            if (qry.startsWith("test="))
              break;
          }
          if (i < segs.length)
            var tests = qry.slice(5);
        }
        if (tests) {
          res.write('<script src="/it.js" tests="'+tests+'" '+debug+'></script>\n');
        }
        if (url)
          res.write(fs.readFileSync(url));
        res.end();
      }
    }
    catch (e) {
      res.statusCode = 500;
      res.statusMessage = e.message;
      res.end();
      log("#e%s", e.message);
    }
  }

};
//#}