//#include macrojs

/** -------------------------------------------------------------------------------------------------------------------
 * server.js
 */

function Server(agent, page, jses) {
  var http = require("http");
  var fs = require("fs");
  var path = require("path");
  var cwd = process.cwd()+"/";

  var mime = {
    ".js": "text/javascript; charset=utf-8",
    ".html": "text/html; charset=utf-8"
  };

  var operates = {
    log: console.log.bind(console),
    exit: process.exit.bind(process)
  }

  var it = "//" + fs.readFileSync(process.argv[1], { encoding: "utf-8" });

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

  var command = agent + "http://localhost:8080/" + page + "?js=" + jses.join(",");
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
    if (url === "it") {
      res.setHeader("Content-Type", "text/javascript; charset=utf-8");
      return res.end(it);
    }

    try {
      var segs = url.split('?');
      url = segs[0];
      if (headers.referer) {
        var type = mime[path.extname(url)];
        if (type)
          res.setHeader("Content-Type", type);
        if(url.endsWith(".js")) {
          segs = macro("./"+url, cwd);
        }
        else {
          segs = fs.readFileSync(url);
        }
        res.write(segs);
        res.end();
      }
      else {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.write('<\script src="/it"><\/script>\n');
        if (url)
          res.write(fs.readFileSync(url));
        var qry = segs[1];
        if (qry) {
          segs = qry.split("&");
          for (var i = 0; i < segs.length; i++) {
            qry = segs[i];
            if (qry.startsWith("js="))
              break;
          }
          if (i < segs.length) {
            qry = qry.slice(3);
            segs = qry.split(",");
            for (var i = 0; i < segs.length; i++) {
              url = segs[i];
              res.write('<\script src="' + url + '"><\/script>');
            }
          }
        }
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
