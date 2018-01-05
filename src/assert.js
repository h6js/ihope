//#include ./trace.js

/** -----------------------------------------------------------------------------------------------
 * assert.js
 */
const EPSILON = 0.0000001192092896;

function assert(assert) {
  var it = newIt(this);
  if (!assert)
    it.fail = 'Assert failure!';
  report(it);
}

function hope(value) {
  var it = newIt(this, "", value);
  if (arguments.length > 1)
    it.args = piece(arguments, 1);
  return it;
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
  it.topic = topic || code || "unknown testing"
  it.value = value;
  it.indent = parent.indent;
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

  equal: function (expect) { assertEqual(this, normalEqual, 'equals', expect) },

  get strict() {
    var me = this;
    return {
      equal: function (expect) { assertEqual(me, strictEqual, 'strict equals', expect) }
    }
  },

  get deep() {
    var me = this;
    return {
      equal: function (expect) { assertDeepEqual(me, normalEqual, 'deep equals', expect) },
      get strict() {
        return {
          equal: function (expect) { assertDeepEqual(me, strictEqual, 'deep strict equals', expect) }
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
    equal: function (expect) { assertEqual(me, normalEqual, 'equal to', expect) },
    get strict() {
      return {
        equal: function (expect) { assertEqual(me, strictEqual, 'strict equal to', expect) }
      }
    },
    get deep() {
      return {
        equal: function (expect) { assertDeepEqual(me, normalEqual, 'deep equal to', expect) },
        get strict() {
          return {
            equal: function (expect) { assertDeepEqual(me, strictEqual, 'deep strict equal to', expect) }
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

function assertEqual(it, compare, verb, expect) {
  var value = it.value, not = it.no, assert;
  assert = compare(value, expect);
  if (!assert ^ not) {
    var type = typeclass(value);
    if (match(type, /^[A-Z]|symbol/) && type === typeclass(expect))
      verb += not ? ' the same' : ' another';
    it.fail = "hope " + textify(value) + ' is ' + (not ? 'not ' : '') + verb + ' ' + textify(expect) + '.';
  }
  report(it);
}

function assertDeepEqual(it, compare, verb, expect) {
  var value = it.value, not = it.no, assert, dif;
  dif = diff(value, expect, compare);
  if (!!dif ^ not)
    it.fail = "hope " + textify(value) + ' is ' + (not ? 'not ' : '') + verb + ' ' + textify(expect) + '.'
      + '\n' + (dif ? dif : 'there is no different for ' + verb + '.');
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

function normalEqual(a, b) { return a == b || typeof a === "number" && typeof b === "number" && EPSILON >= a-b && a-b>=-EPSILON }

function strictEqual(a, b) { return a === b || typeof a === "number" && typeof b === "number" && EPSILON >= a-b && a-b>=-EPSILON }

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

function diff(a, b, equal) {
  var aValue, bValue;
  if (!equal(a, b)) {
    if (isObject(a) && isObject(b)) {
      if (isRegExp(a) && isRegExp(b)) {
        aValue = a.toString(), bValue = b.toString();
        if (!equal(aValue, bValue))
          return ': one is ' + aValue + ', the other is ' + bValue + '.';
      }
      var aKeys = Object.keys(a), bKeys = Object.keys(b);
      var i = aKeys.length, length = bKeys.length;
      if (i > length)
        length = i;
      aKeys.sort();
      bKeys.sort();
      var aKey, bKey;
      for (i = 0; i < length && (aKey = aKeys[i]) === (bKey = bKeys[i]); i++) {
        aValue = a[aKey], bValue = b[bKey];
        var dif = diff(aValue, bValue, equal);
        if (dif) {
          return propexp(aKey) + dif;
        }
      }
      if (aKey !== bKey) {
        if (aKey < bKey || bKey === undefined) {
          return propexp(aKey) + ': one is ' + textify(a[aKey]) + ', the other is absent.';
        }
        if (bKey < aKey || aKey === undefined) {
          return propexp(bKey) + ': one is absent, the other is ' + textify(b[bKey]) + '.';
        }
      }
    }
    else {
      return ': one is ' + textify(a) + ', the other is ' + textify(b);
    }
  }

  function propexp(prop) {
    if (match(prop, /[a-zA-Z_$][\w$]*/))
      return '.' + prop;
    if (match(prop, /^0$|^[1-9]\d*$/))
      return '[' + prop + ']';
    return '[' + stringify(prop) + ']';
  }
}

