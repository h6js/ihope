/** -----------------------------------------------------------------------------------------------
 * lib.js
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

function isFunction(any) {
  return typeof any === 'function';
}

  /** --------------------------------------------------------------------------
   * Object
   */
  var Object_prototype = Object.prototype;
  var create = Object.create;
  var getPrototype = Object.getPrototypeOf;
  var setPrototype = Object.setPrototypeOf;
  var _isPrototypeOf = Object_prototype.isPrototypeOf;

  function isObject(any) {
    return Object(any) === any;    // typeof any === 'object' && any !== nil;
  }

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
   * RegExp
   */
  function isRegExp(any) {
    return any instanceof RegExp;
  }

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
  function indent(code, spaces) {
    return code.replace(/^/gm, spaces);
  }

