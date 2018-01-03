/** -----------------------------------------------------------------------------------------------
 * load.js
 */

(function () {
  iProto.get = function (url) {
    url = purl(url, this.path);
    return get(url);
  };

  var jsed = {};
  iProto.js = function (url) {
    url = purl(url, this.path);
    if (!jsed[url]) {
      jsed[url] = 1;
      var code = get(url) + '\n//# sourceURL=' + url;
      var path = this.path;
      this.path = url;
      try {
        global.eval(code);
      }
      finally {
        this.path = path;
      }
    }
  }

  /** purl(url, rel)  计算相对路径并规格化 */
  var reUrl = /^(https?:\/\/[\w-.]+(?::\d+)?|)([\w\/.-]+)(.*|)/;
  var reRel = /^(https?:\/\/[\w-.]+(?::\d+)?|)(\/(?:[\w.-]+\/)*)/;

  function purl(url, rel) {
    var ms = match(url, reUrl);
    if (ms && !ms[1] && (rel = match(rel, reRel))) {
      url = ms[2];
      if (url[0] !== '/') {
        url = rel[2] + url;
      }
      url = rel[1] + furl(url) + ms[3];
    }
    return url;
  }

  /** furl(url) 路径规格化 */
  var reSlash = /\/+/;

  function furl(src) {
    var des = [];
    src = split(src, reSlash);
    for (var i = 0, l = src.length; i < l; i++) {
      var sym = src[i];
      if (des.length) {
        if (sym !== '.') {
          var end = des[des.length - 1];
          if (sym !== '..') {
            if (end === '.' && sym) pop(des);
            push(des, sym);
          }
          else if (end === '..') {
            push(des, sym);
          }
          else if (end) {
            pop(des);
          }
        }
      }
      else {
        push(des, sym);
      }
    }
    return des.join('/');
  }
})();

