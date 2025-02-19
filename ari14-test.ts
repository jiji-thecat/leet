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

function findDistance(root: TreeNode | null, a: number, b: number): number {}

console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 4, 6)); // 4
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 5, 6)); // 4
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 4, 5)); // 2
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 2, 4)); // 1
console.log(findDistance(makeTree([1, 2, 3, 4, 5, 6, 7]), 1, 4)); // 2
