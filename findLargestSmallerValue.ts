export {};

// Nodeの型定義
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// 与えられたnumより小さい中で一番大きい値を見つける関数
// find the value that is smaller than num but the largest
/**
 *  num = 6
 *    10
 *  5    15
 * 3 7
 *
 * TC O(n)
 * if it is balanced then
 * lev 1, 1 nodes
 * lev 2, 3 nodes
 * lev 3, 7 nodes
 * lev n, 2^n-1 nodes
 * TC(logn)
 * SC O(1)
 *
 */

const wordsFreq: Record<string, number> = {};

function findLargestSmallerValue(root: TreeNode | null, num: number): number | null {
  let ans = -1;
  let currentRoot = root;

  while (currentRoot) {
    if (currentRoot.value < num) {
      ans = currentRoot.value;
      currentRoot = currentRoot.right;
    } else {
      currentRoot = currentRoot.left;
    }
  }

  return ans;
}

// BSTを作成
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

// 関数を呼び出す
const num = 13;
const result = findLargestSmallerValue(root, num);

console.log(`The largest value smaller than ${num} is ${result}`);
// 出力: The largest value smaller than 13 is 12
