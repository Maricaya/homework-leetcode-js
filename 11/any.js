function any(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([])
    } else {
      const result = [];
      let index = 0;

      for (let i = 0; i < promises.length; i++) {
        promises[i].then(value => {
          resolve(value)
        }, reason => {
          index++;
          result[i] = reason

          if (index === promises.length) {
            reject(
              new AggregateError('No Promise in Promise.any was resolved', result)
            )
          }
        });
      }
    }
  });
}