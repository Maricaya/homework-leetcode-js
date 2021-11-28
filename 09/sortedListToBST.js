/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head === null) {
    return null
  }

  return toBTS(head, null)
};

function toBTS (head, tail) {
  let slow = head;
  let fast = head;
  if (head === tail) {
    return null
  }
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let thead = new TreeNode(slow.val);
  thead.left = toBTS(head, slow);
  thead.right = toBTS(slow.next, tail)
  return thead
};

