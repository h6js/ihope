//#include ./go.js

/** -----------------------------------------------------------------------------------------------
 * run.js
 */

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

async function run() {
  var me = this, func = me.func;
  var topic = me.topic;
  if (me.timeout)
    topic += format("(#t%dms)", me.ms);
  me.zero = now();
  try {
    if (isSyncFunction(func)) {
      if (func.name !== '$') {
        print(indent(topic, me.parent.indent));
        func(me);
      }
      else {
        await new Promise(function (goon) {
          var it = newIt(me.parent, topic);
          me.parent.do = function () {
            if (!it.end) {
              reporting();
              iProto.do.apply(me, arguments);
              goon();
            }
          }
          func(done);

          function done(err) {
            if (!it.end) {
              reporting(err);
              goon();
            }
          }
          function reporting(err) {
            if (err) {
              it.fail = err instanceof Error ? err.message : String(err);
            }
            report(it);
          }
        });
      }
    }
    else if (isGeneratorFunction(func)) {
      print(indent(topic, me.parent.indent));
      await go(func, me);
    }
    else if (isAsyncFunction(func)) {
      print(indent(topic, me.parent.indent));
      await func(me);
    }

    var us = me.us;
    for (var i = 0; i < us.length; i++)
      await us[i].run();
    summarize(me);
  }
  catch (err) {
    var s;
    if (err instanceof Timeout) {
      if (err.I !== me) throw err;  // 若不是本层任务超时，则抛出至上层处理。
      s = indent(format('#e⦸ Timeout Error: %dms!', err.I.timeout), err.I.indent);
    }
    else {
      s = format('#e⦸ %s: %s', err.name, err.message);
      var trace = getTrace(err);
      if (trace)
        s += "\n  " + trace;
      s = indent(s, me.indent);
    }
    print(s);
    me.end = 1;
  }
}

function summarize(me) {
  var s = sum(me);
  var total = s.total, okey = s.okey, fail = s.fail, miss = s.miss;
  s = format("#t✈#i Total asserts: #t%d#i,", total);
  if (okey) {
    s += format(' okey: #s%d%s#i,', okey, rate(okey));
  }
  if (fail) {
    s += format(' fail: #f%d%s#i,', fail, rate(fail));
  }
  if (miss) {
    s += format(' miss: #t%d%s#i,', miss, rate(miss));
  }

  s += format(" duration: #t%d#ims.", now() - me.zero);
  print(indent(s, me.indent));

  function rate(value) {
    return Number.isInteger(value = value / total * 100) ? '(' + value + '%)' : '';
  }
}

function sum(me) {
  var its = me.its, total = its.length, okey = 0, fail = 0, miss = 0;
  for (var i = 0; i < total; i++) {
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
  its = me.us;
  for(var i=0; i<its.length; i++) {
    me = sum(its[i]);
    total += me.total;
    okey += me.okey;
    fail += me.fail;
    miss += me.miss;
  }
  return {total, okey, fail, miss};
}

function errors(me) {
  var errs = 0, its = me.its, us = me.us;
  for (var i = 0; i < its.length; i++) {
    var it = its[i];
    if (it.end) {
      if (it.fail)
        errs++;
    }
    else {
      errs++;
    }
  }
  for (var i = 0; i < us.length; i++)
    errs += errors(us[i]);
  return errs;
} 