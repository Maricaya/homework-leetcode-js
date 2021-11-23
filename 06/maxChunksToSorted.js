/**
 * @param {number[]} arr
 * @return {number}
 */
// https://leetcode.com/problems/partition-labels/
var maxChunksToSorted = function (arr) {
  const sorted = [...arr].sort(
    (a, b) => a - b
  );

  let res = 0, sum1 = 0, sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    sum2 += sorted[i];
    if (sum1 === sum2) {
      res += 1;
    }
  }
  return res;
};