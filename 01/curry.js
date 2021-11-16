// 判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
// 如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回curry函数
function curry(func) {
    const args = [...arguments].slice(1)
    if (args.length >= func.length) {
        return func(...args)
    } else {
        return (...args2) => curry(func, ...args, ...args2)
    }
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying