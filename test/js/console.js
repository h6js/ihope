(function () {
  var nop = Function.prototype;
  document.head.appendChild(document.createElement('style'))
    .textContent = '*{margin: 0} body{margin: 0.5em; background: #111; line-height: 18px; font-size: 14px; font-family: Menlo, Monaco, Courier New, monospace;}';

  var reVars = /%[sdc]/g;
  window.console = {
    log: function (s) {
      var args = arguments, len = args.length, i = 1;
      s = s.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
      s = s.replace(reVars, function (s) {
        if (s == '%c') {
          return i < len ? '<c style="' + args[i++] + '">' : '';
        }
        else {
          return i < len ? args[i++] : s;
        }
      });
      for (; i < len; i++)
        s += " " + args[i];

      var p = document.createElement('p');
      p.innerHTML = s;
      document.body.appendChild(p);
      p.scrollIntoView();
      nop(p.clientTop);
    }
  };
})();