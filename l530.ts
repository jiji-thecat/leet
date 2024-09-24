class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const getArray = (root: TreeNode | null, treeArray: number[]): void => {
  if (root !== null) {
    getArray(root.left, treeArray);
    treeArray.push(root.val);
    getArray(root.right, treeArray);
  }
};

function getMinimumDifference(root: TreeNode | null): number {
  const treeArray: number[] = [];
  let min = Number.MAX_SAFE_INTEGER;

  getArray(root, treeArray);

  for (let i = 1; i < treeArray.length; i++) {
    const val = treeArray[i] - treeArray[i - 1];
    min = Math.min(min, val);
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}
