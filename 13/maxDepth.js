var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  let leftMaxDepth = maxDepth(root.left);
  let rightMaxDepth = maxDepth(root.right);
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
};