"use strict";

function afterRun(value, i) {
  console.dir({ value, i });
}

function runCmd(cmd, afterRun) {
  let value = cmd;
  let i = 0;

  return function () {
    afterRun(value, i++);
  };
}

const runner = runCmd("hello world", afterRun);

setTimeout(() => runner(), 2000);
setTimeout(() => runner(), 4000);
