/** -----------------------------------------------------------------------------------------------
 * trace.js
 */

/** get(path) 获取文本资源 */
var get;

if (this.window) {
  get = function (path) {
    var http = new XMLHttpRequest;
    http.open('GET', path, false);
    http.send();
    return http.status / 100 ^ 2 ? '' : http.responseText;
  };
}
else {
  const fs = require('fs');
  get = function (path) {
    return fs.readFileSync(path, { encoding: 'utf-8' });
  };
}

var reWhere = RegExp('\\b' + where.name + '\\b');
var reHere = /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./@-]+(?:\?.*|)):(\d+):(\d+)/;
function where(deep) {
  var stack = split(Error().stack, "\n");
  for (var i = 0, line; line = stack[i++];) {
    if (match(line, reWhere)) break;
  }
  if (i < stack.length) {
    var ms = match(stack[i + deep], reHere);
    if (ms)
      return {
        trace: ms[0],
        loc: ms[1],
        row: ms[2] - 1,
        col: ms[3] - 1
      };
  }
}

var reTrace = /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./@-]+(?:\?.*|)):(\d+):(\d+)/;
function getTrace(error) {
  var stack = error.stack;
  if (stack) {
    stack = split(stack, "\n");
    for (var i = 0, item; item = stack[i++];) {
      var ms = match(item, reTrace);
      if (ms) return ms[0];
    }
  }
}

function getLine(deep) {
  var here, rows, row;
  deep += 1;
  if (here = where(deep)) {
    if (rows = getRows(here.loc)) {
      if (row = rows[here.row]) {
        return { code: row, trace: here.trace }
      }
    }
  }
}

var cachedRows = {};
function getRows(loc) {
  var rows;
  if (hasOwnProperty(cachedRows, loc)) {
    rows = cachedRows[loc];
  }
  else {
    rows = cachedRows[loc] = split(get(loc), "\n");
  }
  return rows;
}

