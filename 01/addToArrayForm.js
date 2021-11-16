/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

// 手动实现一个大数相加
// 当前位 = (num 当前位 + k 当前位 + 进位 carry) % 10
// 两个数加完之后，判断一下进位 carry, 不为 0 的话就加在前面

const addToArrayForm = function (num, k) {
    const res = []
    let carry = 0;
    let index = num.length - 1;

    while (index >= 0 || k > 0) {
        let curK = k % 10;
        let curNum = index < 0 ? 0 : num[index];

        console.log({curK}, {curNum}, {carry});

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