// https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
function race(promises) {
  if (!promises) {
    return
  }
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([])
    } else {
      // 传入的不一定是 promise
      const promisesWrapper = promises.map(promise =>
        promise instanceof Promise
          ? promise
          : Promise.resolve(promise)
      )

      for (let i = 0; i < promisesWrapper.length; i++) {
        promisesWrapper[i].then(result => {
          resolve(result);
        }, reason => {
          reject(reason);
        });
      }
    }
  });
}
