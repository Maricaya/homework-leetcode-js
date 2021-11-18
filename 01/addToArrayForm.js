/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

const addToArrayForm = function (num, k) {
    const res = [];
    let index = num.length - 1;
    let carry = 0;
    while (index >= 0 || k > 0) {
        let curK = k % 10;
        let curNum = index < 0 ? 0 : num[index];

        let curDigitSum = curK + curNum + carry;

        let toBeAdded = curDigitSum % 10;
        res.push(toBeAdded)

        carry = curDigitSum > 9 ? 1 : 0;
        k = Math.floor(k / 10)
        index--;
    }
    if (carry === 1) {
        res.push(1)
    }
    return res.reverse();
};



console.log(addToArrayForm([2, 0], 11));