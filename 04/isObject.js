function is(a, b) {
    if (a === b) {
        // 0, -0
        return a !== 0 || 1 / a === 1 / b
    } else {
        // NaN
        return a !== a && b !== b
    }
}

console.log(is(0, -0));

console.log(is(NaN, NaN));