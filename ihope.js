/** ihope.js -----------------------------------------------------------------------------------------------------------
 * The most simplest test library in the world for JavaScript.
 */

(function (global, window, Function, Object, String, Array, RegExp, Date, Error, Promise) {
  /** 任务启动: ----------------------------------------------------------------------------------------
   *
   */
  function main() {
    var promise, I;
    if (window) {
      promise = new Promise(bind(addEventListener, global, 'load'));
      global.I = I = newI(null, "");
    }
    else {
      promise = new Promise(process.nextTick);
      module.exports = I = newI(null, "");
    }
    promise.then(bind(runs, I.dos)).catch(bind(reject, I));
  }

  /** 任务调度: ----------------------------------------------------------------------------------------
   *
   */

  var iProto = {
    do: function (topic, func, timeout) {
      // var me = this;
      // var i = newI(me, topic, func, timeout);
      // push(me.its, it);
      push(this.dos, bind(run, newI(this, topic, func, timeout)));
    },

    log: function (s) {
      var me = checktime(this);
      s = apply(format, undefined, arguments);
      print(indent(s, me.indent));
    },

    delay: function (ms) {
      var me = checktime(this);
      var I = me;
      while (I) {
        var left = I.timeout + I.zero - now();
        if (left < ms)
          ms = left;
        I = I.parent;
      }
      return ms >= 0 ?
        new Promise(function (resolve) {
          setTimeout(resolve, ms);
        })
        :
        Promise.resolve();
    },
    sum: function () {
      push(this.dos, bind(sum, this));
    },
    assert: assert,
    hope: hope,
    say: say
  };

  function newI(parent, topic, func, timeout) {
    var it = create(iProto);
    it.parent = parent;
    it.topic = topic;
    it.func = func;
    it.timeout = timeout;
    it.indent = parent ? parent.indent + "  " : "";
    it.dos = [];
    it.its = [];
    return it;
  }

  function run() {
    var me = this, func = me.func, promise;
    var topic = "#i" + me.topic;
    if (me.timeout)
      topic += format("(#t%dms)", me.ms);
    print(indent(topic, me.parent.indent));

    me.zero = now();
    if (isSyncFunction(func)) {
      promise = func.length > 1 ?
        new Promise(function (fulfill, reject) {
          // func(me, resolve, reject);
          func(me, fulfilled, rejected);
          function fulfilled(f) {
            if (isFunction(f))
              return function () {
                try {
                  fulfill(me.end ? undefined : apply(f, undefined, arguments));
                }
                catch (e) {
                  reject(e)
                }
              };
            fulfill(f);
          }
          function rejected(f) {
            if (isFunction(f))
              return function () {
                reject(me.end ? undefined : apply(f, undefined, arguments));
              };
            reject(f);
          }
        })
        :
        new Promise(function (fulfill, reject) {
          fulfill(func(me));
        });
    }
    else if (isAsyncFunction(func)) {
      promise = func(me);
    }
    else if (isGeneratorFunction(func)) {
      promise = go(func, me);
    }

    return promise.then(review.bind(me)).then(runs.bind(me.dos)).catch(reject.bind(me));
  }

  function runs() {
    var chain = Promise.resolve();
    for (var i = 0, task; task = this[i]; i++) {
      chain = chain.then(task);
    }
    return chain;
  }

  function reject(err) {
    var me = this;
    var s;
    if (err instanceof Timeout) {
      if (err.I !== me) throw err;  // 若不是本层任务超时，则抛出至上层处理。
      s = indent(format('#e⦸ Timeout Error: %dms!', err.I.timeout), err.I.indent);
    }
    else {
      s = format('#e⦸ Error:', err instanceof Error ? err.message : String(err));
      var trace = getTrace(err);
      if (trace)
        s += "\n  " + trace;
      s = indent(s, me.indent);
    }
    print(s);
    me.end = 1;
  }

  function Timeout(I) {
    this.I = I;
  }

  function checktime(me) {
    var I = me;
    while (I) {
      if (now() - I.zero >= I.timeout) {
        throw new Timeout(I);
      }
      I = I.parent;
    }
    return me;
  }

  function go(gen) {
    var self = this;
    var args = piece(arguments, 1);

    return new Promise(function (resolve, reject) {
      if (typeof gen === "function")
        gen = gen.apply(self, args);
      if (!gen || typeof gen.next !== "function")
        return resolve(gen);

      goon();

      function goon(value) {
        var state;
        try {
          state = gen.next(value);
        }
        catch (e) {
          return reject(e);
        }
        next(state);
      }

      function stop(err) {
        var state;
        try {
          state = gen.throw(err);
        }
        catch (e) {
          return reject(e);
        }
        next(state);
      }

      function next(state) {
        if (state.done)
          return resolve(state.value);
        var value = state.value;
        if (isPromise(value)) {
          value.then(goon, stop);
        }
        else {
          goon(value);
        }
      }
    })
  }

  function sum() {
    var me = this, its = me.its, s;
    for (var total = its.length, okey = 0, fail = 0, miss = 0, i = 0; i < total; i++) {
      var it = its[i];
      if (it.end) {
        if (it.fail) {
          fail++;
        }
        else {
          okey++;
        }
      }
      else {
        miss++;
      }
    }
    s = "#t✈#i";
    if (total) {
      s += format(" Total asserts: #t%d#i,", total);
      if (okey) {
        s += format(' okey: #s%d%s#i,', okey, rate(okey));
      }
      if (fail) {
        s += format(' fail: #f%d%s#i,', fail, rate(fail));
      }
      if (miss) {
        s += format(' miss: #t%d%s#i,', miss, rate(miss));
      }
    }

    s += format(" duration: #t%d#ims.", now() - me.zero);
    print(indent(s, me.indent));

    function rate(value) {
      return Number.isInteger(value = value / total * 100) ? '(' + value + '%)' : '';
    }
  }

  /** 断言机制: ----------------------------------------------------------------------------------------
   *
   */
  function assert(assert) {
    var it = newIt(this);
    if (!assert)
      it.fail = 'Assert failure!';
    report(it);
  }

  function hope(value) {
    var me = this;
    return newIt(me, "", value);
  }

  function say(topic) {
    var me = this;
    return {
      if: function (assert) {
        var it = newIt(me, topic);
        if (!assert)
          it.fail = 'Assert failure!';
        report(it);
      },
      as: function (value) {
        return newIt(me, topic, value);
      },
      on: function (func) {
        var it = newIt(me, topic);
        try {
          func();
        }
        catch (err) {
          it.fail = 'Throw ' + String(err);
        }
        report(it);
      }
    }
  }

  function newIt(parent, topic, value) {
    call(review, parent);
    var it = create(itProto);
    it.parent = parent;
    var line = getLine(2), code;
    if (line) {
      code = trim(line.code);
      it.trace = line.trace;
    }
    it.topic = trim(line.code);
    it.topic = topic || code || "unknown testing"
    it.value = value;
    it.indent = parent.indent;
    it.args = piece(arguments, 3);
    it.zero = now();
    push(parent.its, it);
    return it;
  }

  var itProto = {
    get be() { return this },
    get is() {
      var me = this;
      var is = setPrototype(newIs(me), newA(me));
      return setPrototype({ get not() { me.no = 1; return is } }, is);
    },
    get not() {
      this.no = !this.no;
      return this;
    },

    equal: function (expect) { assertEqual(this, 0, normalEqual, 'equals', expect) },
    
    get strict() {
      var me = this;
      return {
        equal: function (expect) { assertEqual(me, 0, strictEqual, 'strict equals', expect) }
      }
    },

    get deep() {
      var me = this;
      return {
        equal: function (expect) { assertEqual(me, 1, normalEqual, 'deep equals', expect) },
        get strict() {
          return {
            equal: function (expect) { assertEqual(me, 1, strictEqual, 'deep strict equals', expect) }
          }
        }
      }
    },

    get a() { return newA(this) },

    get has() {
      var me = this;
      var has = newHas(me);
      return setPrototype({ get not() { me.no = 1; return has }, get no() { me.no = 1; return has } }, has);
    },
    throw: function () {
      var me = this, value = me.value, args = arguments, specified, error;
      if (specified = args.length) error = args[0];
      args = me.args;
      if (assertFunction(me)) {
        if (isSyncFunction(value)) {
          try {
            apply(value, undefined, args);
            assertThrow(me, specified, error);
          }
          catch (except) {
            assertThrow(me, specified, error, except);
          }
        }
        else if (isGeneratorFunction(value)) {
          return apply(go, undefined, union([value], args))
            .then(function () {
              assertThrow(me, specified, error);
            })
            .catch(function (except) {
              assertThrow(me, specified, error, except);
            });
        }
        else if (isAsyncFunction(value)) {
          return apply(value, undefined, args)
            .then(function () {
              assertThrow(me, specified, error);
            })
            .catch(function (except) {
              assertThrow(me, specified, error, except);
            });
        }
      }
    }
  };

  function newIs(me) {
    return {
      get undefined() { return assertValue(me, me.value === undefined, 'undefined') },
      get null() { return assertValue(me, me.value === null, 'null') },
      get void() { return assertValue(me, me.value === undefined || me.value === null, 'void') },
      get ok() { return assertValue(me, me.value, 'ok') },
      get NaN() { return assertValue(me, me.value !== me.value, 'NaN') },
      get finite() { return assertValue(me, Number.isFinite(me.value), 'finite') },
      get a() { return newA(me) },
      get an() { return newA(me) },
      equal: function (expect) { assertEqual(me, 0, normalEqual, 'equal to', expect) },
      get strict() {
        return {
          equal: function (expect) { assertEqual(me, 0, strictEqual, 'strict equal to', expect) }
        }
      },
      get deep() {
        return {
          equal: function (expect) { assertEqual(me, 1, normalEqual, 'deep equal to', expect) },
          get strict() {
            return {
              equal: function (expect) { assertEqual(me, 1, strictEqual, 'deep strict equal to', expect) }
            }
          }
        }
      },
    };
  }

  function newHas(me) {
    return {
      property: function (property) { assertHasProperty(me, property) },
      get own() {
        return {
          property: function (property) { assertHasOwnProperty(me, property) },
          get enumerable() {
            return {
              property: function (property) { assertHasOwnEnumerableProperty(me, property) }
            }
          }
        }
      },
      get enumerable() {
        return {
          property: function (property) { assertHasEnumerableProperty(me, property) }
        }
      }
    }
  }

  function newA(me) {
    return {
      get boolean() { assertType(me, 'boolean') },
      get number() { assertType(me, 'number') },
      get string() { assertType(me, 'string') },
      get symbol() { assertType(me, 'symbol') },
      get object() { assertType(me, 'object') },
      get function() { assertType(me, 'function') },
      get Object() { assertInstance(me, Object) },
      get Function() { assertInstance(me, Function) },
      get Boolean() { assertInstance(me, Boolean) },
      get Number() { assertInstance(me, Number) },
      get String() { assertInstance(me, String) },
      get Array() { assertInstance(me, Array) },
      get RegExp() { assertInstance(me, RegExp) },
      get Date() { assertInstance(me, Date) },
      get Error() { assertInstance(me, Error) },
      get Set() { assertInstance(me, Set) },
      get WeakSet() { assertInstance(me, WeakSet) },
      get Map() { assertInstance(me, Map) },
      get WeakMap() { assertInstance(me, WeakMap) },
      get Arguments() { assertTag(me, 'Arguments') },
      get Iterator() { assertInstanceOf(me, isIterator(me.value), 'Iterator') },
      get Promise() { assertInstance(me, Promise) },
      get Generator() { assertTag(me, 'Generator') },
      get GeneratorFunction() { assertTag(me, 'GeneratorFunction') },
      get AsyncFunction() { assertTag(me, 'AsyncFunction') },
      get instance() { return { of: function (type) { assertInstance(me, type) } } }
    };
  }

  function assertValue(it, assert, verb) {
    if (!assert ^ it.no)
      it.fail = disappoint(textify(it.value), 'is', it.no, verb);
    report(it);
  }

  function assertEqual(it, deep, compare, verb, expect) {
    var value = it.value, not = it.no, assert;
    if (deep && isObject(value) && isObject(expect)) {
      var valueDiff = {}, expectDiff = {};
      var dif = diff(value, expect, compare, '');
      if (!!dif ^ not)
        it.fail = "hope " + textify(value) + ' is ' + (not ? 'not ' : '') + verb + ' ' + textify(expect) + '.'
          + '\n' + (dif ? dif : 'there is no different for ' + verb + '.');
    }
    else {
      assert = compare(value, expect);
      if (!assert ^ not) {
        var type = typeclass(value);
        if (match(type, /^[A-Z]|symbol/) && type === typeclass(expect))
          verb += not ? ' the same' : ' another';
        it.fail = "hope " + textify(value) + ' is ' + (not ? 'not ' : '') + verb + ' ' + textify(expect) + '.';
      }
    }
    report(it);
  }

  function assertType(it, type) {
    if ((genusof(it.value) !== type) ^ it.no)
      it.fail = disappoint(textify(it.value), 'is', it.no, 'type as', type);
    report(it);
  }

  function assertInstance(it, type) {
    if (isFunction(type)) {
      assertInstanceOf(it, isFunction(type) && it.value instanceof type, funcname(type));
    }
    else {
      it.fail = 'Error: ' + textify(type) + ' is not callable.';
      report(it);
    }
  }

  function assertTag(it, type) {
    assertInstanceOf(it, tagof(it.value) === type, type);
  }

  function assertInstanceOf(it, assert, type) {
    if (!assert ^ it.no)
      it.fail = disappoint(textify(it.value), 'is', it.no, 'an instance of', type);
    report(it);
  }

  function disappoint(one, vi, not, vt, other) {
    return 'Hope ' + one + ' ' + vi + (not ? ' not ' : ' ') + vt + (other ? ' ' + other : '') + '.';
  }

  function assertHasProperty(it, property) {
    if (assertObject(it)) {
      assertProperty(it, property in it.value, 'property', property);
    }
  }

  function assertHasOwnProperty(it, property) {
    if (assertObject(it)) {
      assertProperty(it, hasOwnProperty(it.value, property), 'own property', property);
    }
  }

  function assertHasEnumerableProperty(it, property) {
    if (assertObject(it)) {
      var desc = getPropertyDescriptor(it.value, property);
      assertProperty(it, desc && desc.enumerable, 'enumerable property', property);
    }
  }

  function assertHasOwnEnumerableProperty(it, property) {
    if (assertObject(it)) {
      var desc = getOwnPropertyDescriptor(it.value, property);
      assertProperty(it, desc && desc.enumerable, 'own enumerable property', property);
    }
  }

  function assertProperty(it, assert, verb, property) {
    var no = it.no;
    if (!assert ^ no)
      it.fail = 'But ' + textify(it.value) + ' has ' + (no ? '' : 'no ') + verb + ' ' + stringify(property) + '.';
    report(it);
  }

  function assertObject(it) {
    return isObject(it.value) || (it.fail = 'But ' + textify(it.value) + ' is not an object!', report(it));
  }

  function assertFunction(it) {
    return isFunction(it.value) || (it.fail = 'But ' + textify(it.value) + ' is not a function!', report(it))
  }

  function assertThrow(it, specified, error, except) {
    var not = it.no, ok = arguments.length < 4;

    if (ok) {
      if (!not)
        it.fail = fail(specified ? textify(error) : '', textify(except));
    }
    else if (specified) {
      if (isFunction(error)) {
        if (!(except instanceof error) ^ not)
          it.fail = fail(funcname(error) + ' object', textify(except));
      }
      else if (isString(error)) {
        error = stringify(error);
        if (isString(except)) {
          except = stringify(except);
        }
        else if (isObject(except)) {
          if (hasProperty(except, 'message')) {
            except = stringify(except.message);
          }
          else {
            except = textify(except);
          }
        }
        else {
          except = textify(except);
        }
        if ((error !== except) ^ not)
          it.fail = fail(error, except);
      }
      else if ((error !== except) ^ not) {
        it.fail = fail(textify(error), textify(except));
      }
    }
    else if (not) {
      it.fail = fail('', textify(except));
    }
    report(it);

    function fail(error, except) { return 'Hope' + (not ? ' not' : '') + ' throw ' + (error && error + ' ') + 'but throw ' + (ok ? 'nothing' : except) + '.' };
  }

  function typeclass(any) {
    var type = genusof(any), proto;
    if (type === 'object' || type === 'function') {
      if (proto = getPrototype(any)) {
        if (hasOwnProperty(proto, 'constructor')) {
          type = funcname(proto.constructor);
        }
        else {
          type = tagof(any);
        }
      }
      else {
        type = 'null prototype';
      }
    }
    return type;
  }

  function funcname(any) {
    return isFunction(any) ?
      any.name || '[anonymous]' : '';
  }

  function normalEqual(a, b) { return a == b }
  function strictEqual(a, b) { return a === b }

  function textify(any) {
    var s = typeclass(any);
    if (s === 'string' || s === 'boolean') {
      s += ' ' + stringify(any);
    }
    else if (s === 'number' || s === 'symbol') {
      s += ' ' + String(any);
    }
    else if (s === 'Date' || s === 'String' || s === 'Number' || s === 'Boolean') {
      s += ' ' + stringify(any.valueOf());
    }
    else if (s === 'null prototype') {
      s = 'object with ' + s;
    }
    else if (s !== 'undefined' && s !== 'null') {
      s += ' object';
    }
    return s;
  }

  function diff(a, b, equal, path) {
    var aKeys = [], bKeys = [], i, length;
    i = 0;
    for (aKeys[i++] in a);
    length = i;
    i = 0;
    for (bKeys[i++] in b);
    if (i > length)
      length = i;
    aKeys.sort();
    bKeys.sort();
    for (i = 0; i < length; i++) {
      var aKey = aKeys[i], aValue, bKey = bKeys[i], bValue;
      if (aKey === bKey) {
        aValue = a[aKey], bValue = b[bKey];
        if (!equal(aValue, bValue)) {
          if (isObject(aValue) && isObject(bValue)) {
            var dif;
            if (dif = diff(aValue, bValue, equal, path + propexp(aKey)))
              return dif;
          }
          else {
            return diffinfo(path + propexp(aKey), textify(aValue), textify(bValue));
          }
        }
      }
      else if (aKey < bKey) {
        return diffinfo(path + propexp(aKey), textify(a[aKey]), 'absent');
      }
      else if (bKey < aKey) {
        return diffinfo(path + propexp(bKey), 'absent', textify(b[bKey]));
      }
      else {
        break;
      }
    }

    function diffinfo(path, one, other) {
      return 'property ' + path + ' is different: one is ' + one + ', the other is ' + other + '.';
    }

    function propexp(prop) {
      if (match(prop, /[a-zA-Z_$][\w$]*/))
        return '.' + prop;
      if (match(prop, /^0$|^[1-9]\d*$/))
        return '[' + prop + ']';
      return '[' + stringify(prop) + ']';
    }
  }

  /** 源码追踪: ----------------------------------------------------------------------------------------
   *
   */
  /** get(path) 获取文本资源 */
  var get;

  if (window) {
    get = function (path) {
      var http = new XMLHttpRequest;
      http.open('GET', path, false);
      http.send();
      return http.status / 100 ^ 2 ? '' : http.responseText;
    };
  }
  else {
    var fs = require('fs');
    get = function (path) {
      return fs.readFileSync(path, { encoding: 'utf-8' });
    };
  }

  var reWhere = /\bwhere\b/;
  var reHere = /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./-]+(?:\?.*|)):(\d+):(\d+)/;
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

  var reTrace = /((?:https?:\/\/[\w.-]+(?::\d+)?|)[\w./-]+(?:\?.*|)):(\d+):(\d+)/;
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

  /** 任务输出: ----------------------------------------------------------------------------------------
   *
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
      print("%s", indent(s, it.indent));
      it.end = 1;
    }
  }

  function review() {
    var me = this, it = me.its[me.its.length - 1];
    if (it && !it.func && !it.end) {
      var s = '#t• ' + it.topic;
      if (it.trace)
        s += indent('\n#e' + it.trace, '  ');
      print(indent(s, it.indent));
    }
  }

  var colorize, colors;
  if (window) {
    if (console.msIsIndependentlyComposed) {
      colors = [""];
      colorize = function (s, c) {
        return "";
      }
    }
    else {
      colors = {
        0: "",
        i: "color:lightgray",
        s: "color:lawngreen;font-weight:900",
        f: "color:tomato;font-weight:900",
        e: "color:red",
        t: "color:royalblue;font-weight:900",
        m: "color:darkgrey"
      };
      colorize = function (s, c) {
        return (c = colors[c]) ? (push(this, c), "%c") : "";
      }
    }
  }
  else {
    colors = {
      0: "\x1b[0m",
      i: "\u001b[0m\u001b[37m",
      s: "\u001b[1m\u001b[32m",
      f: "\u001b[1m\u001b[31m",
      e: "\u001b[0m\u001b[31m",
      t: "\u001b[1m\u001b[34m",
      m: "\u001b[1m\u001b[30m"
    }
    colorize = function (s, c) {
      return colors[c] || "";
    }
  }

  var reColor = /#(\w)/g;
  function print(s) {
    var args = arguments;
    s = apply(format, undefined, args);
    args.length = 1;
    args[0] = replace(s, reColor, colorize.bind(args)) + colors[0];
    apply(console.log, console, args);
  }

  var reVars = /%[sd]/g;
  function format(s) {
    var args = arguments, len = args.length, i = 1;
    s = replace(s, reVars, function (s) {
      return i < len ? args[i++] : s;
    });
    for (; i < len; i++)
      s += " " + args[i];
    return s;
  }

  /** 代码加载: ----------------------------------------------------------------------------------------
  *
  */
  iProto.js = function () {
    var jss = [window ? location.pathname : process.argv[1]];

    function js(url) {
      url = purl(url, jss[jss.length - 1]);
      var code = get(url) + '\n//# sourceURL=' + url;
      push(jss, url);
      try {
        global.eval(code);
      }
      finally {
        pop(jss);
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

    return js;
  }();

  /** 基础支持: ----------------------------------------------------------------------------------------
  *
  */
  var undefined;

  /** --------------------------------------------------------------------------
   * Function
   */
  var nop = Function.prototype;
  var _call = nop.call;
  var _apply = nop.apply;
  var _bind = nop.bind;
  var func = _call.bind(_bind, _call);
  var bind = func(_bind);
  var call = func(_call);
  var apply = func(_apply);

  function partial(func, vars) {
    return function () {
      var args = arguments;
      for (var i = 0; i < vars.length; i++) {
        if (i in vars) {
          splice(args, i, 0, vars[i]);
        }
      }
      return func.apply(this, args);
    }
  }

  function isFunction(any) {
    return typeof any === 'function';
  }

  /** --------------------------------------------------------------------------
   * Object
   */
  var Object_prototype = Object.prototype;
  var create = Object.create;

  function isObject(any) {
    return Object(any) === any;    // typeof any === 'object' && any !== nil;
  }

  var getPrototype = Object.getPrototypeOf;
  var setPrototype = Object.setPrototypeOf;
  var _isPrototypeOf = Object_prototype.isPrototypeOf;
  
  function genusof(any) {
    return any === null ? "null" : typeof any;
  }

  var reTrimTag = /\[object |\]/g;
  function tagof(any) {
    return replace(call(Object_prototype.toString, any), reTrimTag, '');
  }

  var hasOwnProperty = func(Object_prototype.hasOwnProperty);
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  function hasProperty(obj, prop) {
    while (obj) {
      if (hasOwnProperty(obj, prop))
        return obj;
      obj = getPrototype(obj);
    }
  }

  function getPropertyDescriptor(obj, prop) {
    var desc;
    while (obj) {
      if (desc = getOwnPropertyDescriptor(obj, prop))
        return desc;
      obj = getPrototype(obj);
    }
  }

  /** --------------------------------------------------------------------------
   * String
   */
  var String_prototype = String.prototype;

  function isString(any) {
    return typeof any === 'string';
  }

  var trim = func(String_prototype.trim);
  var replace = func(String_prototype.replace);
  var match = func(String_prototype.match);
  var split = func(String_prototype.split);

  var stringify = JSON.stringify;

  /** --------------------------------------------------------------------------
   * Array
   */
  var Array_prototype = Array.prototype;
  var piece = func(Array_prototype.slice);
  var splice = func(Array_prototype.splice);
  var push = func(Array_prototype.push);
  var pop = func(Array_prototype.pop);

  /** --------------------------------------------------------------------------
   * Date
   */
  var now = Date.now;

  /** --------------------------------------------------------------------------
   * Iterator, Promise, Generator, Async Function
   */
  var isIterator = bind(_isPrototypeOf, getPrototype(getPrototype(''[Symbol.iterator]())));

  var isPromise = bind(_isPrototypeOf, Promise.prototype);

  function isGeneratorFunction(any) {
    return tagof(any) === 'GeneratorFunction';
  }

  function isAsyncFunction(any) {
    return tagof(any) === 'AsyncFunction';
  }

  function isSyncFunction(any) {
    return tagof(any) === 'Function';
  }

  /** indent(code, spaces) 缩进代码行 */
  var indent = partial(replace, [, /^/gm]);

  main();
})(this.window || global, this.window, Function, Object, String, Array, RegExp, Date, Error, Promise);
