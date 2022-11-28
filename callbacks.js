doWork(work, log);

function doWork(workToBeDone, afterWorkDone) {
  let i;
  setTimeout(() => {
    i = workToBeDone();
    afterWorkDone(i);
  }, 3000);
}

function work() {
  let j;
  for (let i = 0; i < 10; i++) {
    j = i;
  }
  return j;
}

function log(string) {
  console.dir({ string });
}
