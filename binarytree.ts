export {};

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

const makeArray = (root: TreeNode | null): (number | null)[] => {
  const arr = [root];
  const ans: (number | null)[] = [];

  while (arr.length > 0) {
    const node = arr.shift();

    if (node) {
      ans.push(node.val);
      arr.push(node.left);
      arr.push(node.right);
    } else {
      ans.push(null);
    }
  }

  while (ans[ans.length - 1] === null) {
    ans.pop();
  }

  return ans;
};

const makeTree = (nums: (number | null)[]): TreeNode | null => {
  const result: (TreeNode | null)[] = nums.map((v) => (v !== null ? new TreeNode(v) : null));

  for (let i = 0; i < nums.length; i++) {
    if (result[i] !== null) {
      result[i]!.left = result[2 * i + 1];
      result[i]!.right = result[2 * i + 2];
    }
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

//console.log(isSymmetric(makeTree([1, 2, 2, 3, 4, 4, 3])));

const arr = [3, 9, 20, null, null, 15, 7];
console.log(makeArray(makeTree(arr)));
