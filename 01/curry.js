// function curry(func) {
//     // const arguments = []
// }
//
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying


function curry(func) {
    const args = [...arguments].slice(1)
    if (args.length >= func.length) {
        return func(...args)
    } else {
        return (...args2) => curry(func, ...args, ...args2)
    }
}

class Test {
    default = 0;

    sum(...arg) {
        let sum = 0;
        for (let i = 0; i < arg.length; i++) {
            sum += arg[i];
        }
        return this.default + sum;
    }
}

const test = new Test();

const curriedSum = curry(test.sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
// console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3)); // 6, full currying