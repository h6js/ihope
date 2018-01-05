//#include ./i.js
//#include ./load.js
//#include ./run.js

/** -----------------------------------------------------------------------------------------------
 * main.js
 */

async function main() {
  try {
    await I.run();
    var errs = errors(I);
    if(errs) {
      log("#eTOTAL ERRORS: %d !", errs)
    }
    else {
      log("#sALL SUCCESSFUL!")
    }
    exit(errs);
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

