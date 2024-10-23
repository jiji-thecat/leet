export {};
// Definition for a binary tree node.
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
  const arr: (TreeNode | null)[] = [root];
  const ans: (number | null)[] = [];

  while (arr.length > 0) {
    const node = arr.shift();

    if (node) {
      ans.push(node.val);
      arr.push(node?.left);
      arr.push(node?.right);
    } else {
      ans.push(null);
    }
  }

  while (ans[ans.length - 1] === null) {
    ans.pop();
  }

  return ans;
};

function buildTreeSlice(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = preorder[0];
  const node = new TreeNode(root);

  const indexInorder = inorder.indexOf(root);

  const inLeft = inorder.slice(0, indexInorder);
  const inRight = inorder.slice(indexInorder + 1);
  const preLeft = preorder.slice(1, inLeft.length + 1);
  const preRight = preorder.slice(inLeft.length + 1);

  node.left = buildTreeSlice(preLeft, inLeft);
  node.right = buildTreeSlice(preRight, inRight);

  return node;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map();
  inorder.forEach((v, i) => map.set(v, i));

  const calc = (preStart: number, inStart: number, inEnd: number): TreeNode | null => {
    if (preStart >= preorder.length || inStart > inEnd) {
      return null;
    }

    const root = preorder[preStart];
    const node = new TreeNode(root);
    const rootIndexInorder = map.get(root);

    node.left = calc(preStart + 1, inStart, rootIndexInorder - 1);
    /**
     * // prestart + inorderのleft部分の大きさ + 1 が、次のprestartになる。
     * pre = [3,9,20,15,7]
     * ino = [9,3,15,20,7]
     *          ^
     * prestart = 0
     * inorderのleft部分の大きさ = 1(ino[0])
     * +1 = その次。preorderが20から始まるように。
     *  */
    node.right = calc(preStart + (rootIndexInorder - inStart) + 1, rootIndexInorder + 1, inEnd);

    return node;
  };

  return calc(0, 0, inorder.length - 1);
}

//const pre = [3, 9, 20, 15, 7];
//const ino = [9, 3, 15, 20, 7];

const pre = [1, 2, 3];
const ino = [2, 1, 3];

console.log(makeArray(buildTreeSlice(pre, ino)));
//console.log(makeArray(buildTree(pre, ino)));
