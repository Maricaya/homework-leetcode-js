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
// 根到叶子节点的数字

// public int sumNumbers(TreeNode root) {
//   return sum(root, 0);
// }

// public int sum(TreeNode n, int s){
//   if (n == null) return 0;
//   if (n.right == null && n.left == null) return s*10 + n.val;
//   return sum(n.left, s*10 + n.val) + sum(n.right, s*10 + n.val);
// }

var sumNumbers = function(root) {
  let sum = 0;
  function helper(root, s) {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      sum += Number(`${s}${root.val}`)

    }
    console.log(root.val)
    helper(root.left, `${s}${root.val}`)
    helper(root.right, `${s}${root.val}`)
  }
  if (!root) {
    return 0
  }
  helper(root, "")
  return sum
};

// [1,2,3,4]
// 124 + 13 = 25

sumNumbers({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})