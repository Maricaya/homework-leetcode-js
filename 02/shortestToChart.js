/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
    const cPostion = []
    const result = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            cPostion.push(i)
        }
    }

    for (let i = 0; i < s.length; i++) {
        let allDistance = []
        cPostion.map(item => {
            console.log(Math.abs(item - i));
            allDistance.push(Math.abs(item - i))
        })
        result.push(Math.min(...allDistance))
    }
    return result
};

console.log(
    shortestToChar("loveleetcode", "e"),
    [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
);