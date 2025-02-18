//  Find distance between two nodes of a Binary Tree
/**
 * Sure! Here's the problem statement for "Find distance between two nodes of a Binary Tree" in English:

---

### **Problem Statement: Find Distance Between Two Nodes in a Binary Tree**

Given a binary tree and two nodes in the tree, your task is to find the shortest distance between the two nodes.

#### **Input**

- A binary tree represented by the root node.
- Two nodes `a` and `b` (both node values are integers) for which you need to find the distance between them.

#### **Output**

- An integer representing the shortest distance between the two nodes.

#### **Function Signature**

```typescript
function findDistance(root: TreeNode | null, a: number, b: number): number
```

#### **Constraints**

- The binary tree will have at most 10^5 nodes.
- The values of the nodes are distinct integers.
- The values `a` and `b` are guaranteed to exist in the binary tree.
  
#### **Example 1:**

```plaintext
Input:
    root = [1, 2, 3, 4, 5, 6, 7]
    a = 4
    b = 6

Output: 4

Explanation: The shortest path between node 4 and node 6 is: 4 -> 2 -> 1 -> 3 -> 6 (Distance = 4)
```

#### **Example 2:**

```plaintext
Input:
    root = [1, 2, 3, 4, 5, 6, 7]
    a = 5
    b = 7

Output: 4

Explanation: The shortest path between node 5 and node 7 is: 5 -> 2 -> 1 -> 3 -> 7 (Distance = 4)
```

#### **Explanation**

In this problem, you are asked to find the shortest path between two nodes in a binary tree. The shortest path is the number of edges from one node to the other. You need to determine the path by finding their Lowest Common Ancestor (LCA) and then calculating the number of steps from each node to the LCA.

---

This problem helps test your understanding of tree traversal, Lowest Common Ancestor (LCA) algorithms, and basic tree operations.
 */

/**
 *
 * summary
 *  find the shortest distance between a and b
 *
 * example
 *  [1, 2, 3, 4, 5, 6, 7]), 4, 6)); // 4
 * [1, 2, 3, 4, 5, 6, 7]), 5, 6)); // 4
 *
 * edge
 *  [] -> 0
 *  [1]->0
 *
 * memo
 *      1
 *    2   3
 *  4  5 6  8
 * 4,6
 * 4,5
 * 1,4
 *
 * recursive.
 * lowest common ansestor.
 *
 * 1. search for lowest common ansestor and return the node
 * 2. search a,b,distance from that node
 *
 * searchCA(head)
 *  if(!head)
 *   ret null
 *  if head.val === a || head.val === b
 *   ret head
 *
 *  resLeft = searchCA(head.left)
 *  resRight = searchCA(head.right)
 *
 * ret resLeft && resRight ? head : resLeft || resRight
 *
 * lca = searchCA(head)
 *
 * distance(head, taregt, sum=0)
 *  if !head ret 0
 *  if head.val === target
 *   ret sum
 *
 *  sum++
 *
 *  leftSum = distance(head.left, sum)
 *  rSum = distance(head.right, sum)
 *  ret leftSum+rSUm
 *
 * ret distance(lca, a)+distance(lca, b)
 *
 */

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

function findDistance(root: TreeNode | null, a: number, b: number): number {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }

  const searchCA = (root: TreeNode | null): TreeNode | null => {
    if (!root) {
      return null;
    }
    if (root.val === a || root.val === b) {
      return root;
    }

    const resLeft = searchCA(root.left);
    const resRight = searchCA(root.right);

    return resLeft && resRight ? root : resLeft || resRight;
  };

  const lca = searchCA(root);

  const dist = (root: TreeNode | null, target: number, sum: number): number => {
    if (!root) {
      return 0;
    }
    if (root.val === target) {
      return sum;
    }

    sum++;

    return dist(root.left, target, sum) + dist(root.right, target, sum);
  };

  return dist(lca, a, 0) + dist(lca, b, 0);
}

console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 4, 6)); // 4
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 5, 6)); // 4
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 4, 5)); // 2
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 2, 4)); // 1
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 1, 4)); // 2
