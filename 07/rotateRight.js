/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) {
    return null
  }

  let listNum = 1;
  let tail = head;

  while (tail.next !== null) {
    listNum++;
    tail = tail.next;
  }
  // 头尾相连
  tail.next = head;

  let newHeadIndex = listNum - k % listNum;

  // 重新找到 head
  for (let i = 0; i < newHeadIndex; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;

};