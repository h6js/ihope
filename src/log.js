/** -----------------------------------------------------------------------------------------------
 * log.js
 */

function report(it) {
  if (!(it.end = it.parent.end)) {
    var s = it.topic;
    if (it.ms) {
      s += format(" (timeout #m%dms)", it.ms);
    }
    if (it.fail) {
      s = format("#f✘ %s\n#e%s%s", s, indent(it.fail, "  "), it.trace ? "\n" + indent(it.trace, "  #m") : "");
    }
    else {
      s = format("#s✔ %s", s);
    }
    log("%s", indent(s, it.indent));
    it.end = 1;
  }
}

function review() {
  var me = this, it = me.its[me.its.length - 1];
  if (it && !it.func && !it.end) {
    var s = '#t• ' + it.topic;
    if (it.trace)
      s += indent('\n#e' + it.trace, '  ');
    log(indent(s, it.indent));
  }
}

function log() {
  print(format.apply(undefined, arguments));
}

//#if (BROWSER) {
const server = cases
  ? Server()
  : nop;
function print(s) {
  server("log", textcolor(s))
  console.log.apply(console, argscolor(arguments));
}
//#}
//#if (CLI) {
function print(s) {
  console.log(textcolor(s));
}
//#}

const textcolors = {
  0: "\x1b[0m",
  i: "\u001b[0m\u001b[37m",
  s: "\u001b[1m\u001b[32m",
  f: "\u001b[1m\u001b[31m",
  e: "\u001b[0m\u001b[31m",
  t: "\u001b[1m\u001b[34m",
  m: "\u001b[1m\u001b[30m"
};

function textcolor(text) {
  return replace(text, /#[sftiem]/g, (s) => textcolors[s[1]] || textcolors[0]) + textcolors[0];
}

const argscolors = {
  0: "",
  i: "color:lightgray",
  s: "color:lawngreen;font-weight:900",
  f: "color:tomato;font-weight:900",
  e: "color:red",
  t: "color:royalblue;font-weight:900",
  m: "color:darkgrey"
};

function argscolor(args) {
  var i = 1;
  args[0] = replace(args[0], /#\w/g, (s) => (args[i++] = argscolors[s[1]] || "", "%c"));
  args.length = i;
  return args;
}

function format(s) {
  var i = 1, args = arguments;
  return replace(s, /%[sd]/g, function (s) {
    return i < args.length ? args[i++] : s;
  });
}
