// https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
function allSettled(promises) {
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
            const result = [];

            let index = 0;

            for (let i = 0; i < promisesWrapper.length; i++) {
                promisesWrapper[i].then(value => {
                    result[i] = {
                        status: 'fulfilled',
                        value,
                    }
                    index++;
                    if (index === promises.length) {
                        resolve(result);
                    }
                }, reason => {
                    result[i] = {
                        status: 'rejected',
                        reason
                    }
                    index++;
                    if (index === promises.length) {
                        resolve(result);
                    }
                });
            }
        }
    });
}
