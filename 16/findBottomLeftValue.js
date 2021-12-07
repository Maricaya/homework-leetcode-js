/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let queue = [root];
  let result = [];
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let n = queue.shift()
      if (i === 0) {
        result.push(n.val)
      }
      if (n.left !== null) {
        queue.push(n.left)
      }
      if (n.right !== null) {
        queue.push(n.right)
      }
    }
  }
  return result.reverse()[0]
};