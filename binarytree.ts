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

const makeTree = (nums: number[]): TreeNode => {
  const result = nums.map((v) => new TreeNode(v));

  for (let i = 0; i < nums.length; i++) {
    result[i].left = result[2 * i + 1];
    result[i].right = result[2 * i + 2];
  }

  return result[0];
};

function isSymmetric(root: TreeNode | null): boolean {
  const arr = [root];
  let isFirst = true;

  while (arr.length > 0) {
    const arrLen = arr.length;
    let row = [];
    for (let i = 0; i < arrLen; i++) {
      const node = arr.shift();
      row.push(node);

      if (node?.left) {
        arr.push(node.left);
      }
      if (node?.right) {
        arr.push(node.right);
      }
    }
    console.log(row);

    if (isFirst) {
      isFirst = false;
      continue;
    }

    if (row.length % 2 !== 0) {
      return false;
    }
    const mid = row.length / 2;
    let back = row.splice(mid);
    back.reverse();
    console.log(row);
    console.log(back);

    if (JSON.stringify(back) !== JSON.stringify(row)) {
      return false;
    }
  }

  return true;
}

console.log(isSymmetric(makeTree([1, 2, 2, 3, 4, 4, 3])));
