/** -----------------------------------------------------------------------------------------------
 * go.js
 */

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
