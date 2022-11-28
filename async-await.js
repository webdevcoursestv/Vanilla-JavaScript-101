(async function () {
  const i = await doWork(work, log);

  async function doWork(workToBeDone, afterWorkDone) {
    return new Promise((resolve) => {
      let i;
      setTimeout(() => {
        i = workToBeDone();
        resolve(afterWorkDone(i));
      }, 3000);
    });
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
    return string;
  }
})();
