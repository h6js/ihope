//#include ./lib.js
//#include ./log.js
//#include ./assert.js
//#include ./run.js

/** -----------------------------------------------------------------------------------------------
 * i.js
 */

function newI(parent, topic, func, timeout) {
  var I = create(iProto);
  I.parent = parent;
  I.topic = topic;
  I.func = func;
  I.timeout = timeout;
  I.us = [];
  I.its = [];
  if (parent) {
    I.indent = parent.indent + "  ";
    I.path = parent.path;
  }
  else {
    I.indent = "";
  }
  return I;
}

const iProto = {
  do: function (topic, func, timeout) {
    push(this.us, newI(this, topic, func, timeout));
  },

  log: function (s) {
    var me = checktime(this);
    s = apply(format, undefined, arguments);
    print(indent(s, me.indent));
  },

  delay: async function (ms) {
    var me = checktime(this);
    var I = me;
    while (I) {
      var left = I.timeout + I.zero - now();
      if (left < ms)
        ms = left;
      I = I.parent;
    }
    if (ms >= 0)
      await new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
  },
  assert: assert,
  get am() {
    var me = this;
    return { sure: bind(assert, me) };
  },
  hope: hope,
  say: say,
  run: run
};

function say(topic) {
  var me = this;
  var it = newIt(me, topic);
  return {
    if: function (assert) {
      if (!assert)
        it.fail = 'Assert failure!';
      report(it);
    },
    as: function (value) {
      it.value = value;
      return it;
    },
    on: function on(func) {
      try {
        func();
      }
      catch (err) {
        it.fail = 'Throw ' + String(err);
      }
      report(it);
    }
  };
}

