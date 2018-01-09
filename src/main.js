//#include ./i.js
//#include ./load.js
//#include ./run.js

/** -----------------------------------------------------------------------------------------------
 * main.js
 */

async function main() {
  try {
    await I.run();
    exit(errors(I));
  }
  catch (e) {
    log("#eUncaught %s: %s", e.name, e.message);
    exit(-1);
  }
}

function exit(code) {
  if (this.window) {
    remote("exit", code);
    this.window.close();
  }
  else {
    process.exit(code);
  }
}

