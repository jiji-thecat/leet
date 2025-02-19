// Given an array of binary strings (like "1101" representing 13) and a maximum 'k' number of operations
// that can be performed. The operation is taking the 1s complement of a string. Find and return the maximum possible sum of all the strings.
/**
 * ### **Problem Statement: Maximum Binary String Sum with k Operations**  

You are given an array of binary strings, where each string represents an integer in base-2 format. You can perform at most **k operations**,
where each operation consists of flipping all bits of a selected binary string (taking the 1’s complement).  

Your task is to determine the **maximum possible sum** of all the integers after performing at most **k** operations optimally.  

#### **Example 1:**  
```plaintext
Input: binaryStrings = ["1101", "0010"], k = 1  
Output: 27  
Explanation:  
- "1101" (13 in decimal) and "0010" (2 in decimal).  
- Flipping "0010" → "1101" (13 in decimal).  
- Maximum sum = 13 + 13 = 26.  
```

#### **Example 2:**  
```plaintext
Input: binaryStrings = ["101", "111", "000"], k = 2  
Output: 13  
Explanation:  
- Original values: [5, 7, 0].  
- Flipping "000" → "111" (7 in decimal).  
- Maximum sum = 5 + 7 + 7 = 19.  
```

#### **Constraints:**  
- \( 1 \leq \) `binaryStrings.length` \( \leq 10^5 \)  
- \( 1 \leq \) `binaryStrings[i].length` \( \leq 10 \)  
- \( 0 \leq k \leq binaryStrings.length \)  
- Each `binaryStrings[i]` consists only of '0' and '1'.  

#### **Follow-up:**  
- Can you solve this in **O(n)** time complexity?
 */
/**
 * 2025/02/19 明日解く
 *
 * ---
 * どうやって解くかというと、1の補数を求めて、それと元の配列の差を求めて、その差をdscにソートして
 * i=0からkまでsumに足してって最後sumを返すというもの。
 *
 * まず、整数の配列にconvertをする。
 * sum合計を計算しておく。
 * 次に、diffを計算する。diffでは、１の補数と元の配列の差を求める。
 * 1の補数は、1 << 元のバイナリ値のlength - 1 - 元のバイナリ値で求める。(1101(=13)であれば、1<<4=10000, 10000-1->1111, 1111-1101->0010(=2))
 * 次に元の配列の差を求めたいので、1の補数-元のバイナリ値を返す。(0010(2) - 1101(13)=-11)
 *
 * これをdscにソートする。ので、b-a
 * *ソートアルゴリズムはnlognなので、o(n)でやりたければ、クイックセレクトを使うと良い。
 *
 * 最後にfor(i=0; i<k i++)の中で、diff[i] > 0の時だけsum += diff[i]をして、それ以外の場合は、増えないので、breakする。
 */

export {};
function maximumBinaryStringSum(binaryStrings: string[], k: number): number {
  // バイナリ文字列を整数に変換する
  const nums = binaryStrings.map((str) => parseInt(str, 2));

  // 文字列の長さを取得
  const maxLength = binaryStrings[0].length;

  // 最初の合計を計算
  let sum = nums.reduce((acc, num) => acc + num, 0); // 15

  if (k === 0) {
    return sum;
  }

  // 反転操作の候補（反転した後の値 - 元の値）を計算し、最小の差を見つける
  const diffs = nums.map((num) => {
    const complement = (1 << maxLength) - 1 - num; // 1の補数を計算するときの式。（13(1101)の補数は2(0010)）
    return complement - num; // 反転後の値と元の値の差
  });

  //console.log(diffs); [-11,11]となっている。

  // 反転の差を降順に並べ、最も効果的な反転操作を選ぶ
  diffs.sort((a, b) => b - a); // [11,-11]

  // k 回まで反転操作を行う
  for (let i = 0; i < k; i++) {
    if (diffs[i] > 0) {
      sum += diffs[i]; // 最大の反転差を加算
    } else {
      break; // 差が0以下ならもう反転しても意味がない
    }
  }

  return sum;
}

// Test Case 1
const binaryStrings1 = ['1101', '0010'];
const k1 = 1;
console.log(maximumBinaryStringSum(binaryStrings1, k1)); // 26 (Explanation: Flip "0010" -> "1101", sum = 13 + 13 = 26)

// Test Case 2
const binaryStrings2 = ['101', '111', '000'];
const k2 = 2;
console.log(maximumBinaryStringSum(binaryStrings2, k2)); // 19 (Explanation: Flip "000" -> "111", sum = 5 + 7 + 7 = 19)

// Test Case 3
const binaryStrings3 = ['1010', '1101', '0001'];
const k3 = 1;
console.log(maximumBinaryStringSum(binaryStrings3, k3)); // 37 (Explanation: Flip "0001" -> "1110", sum = 10 + 13 + 14 = 37)

// Test Case 4 (k = 0)
const binaryStrings4 = ['110', '010', '100'];
const k4 = 0;
console.log(maximumBinaryStringSum(binaryStrings4, k4)); // 12 (No flips, sum = 6 + 2 + 6 = 12)

// Test Case 6 (Edge Case: Single binary string)
const binaryStrings6 = ['111'];
const k6 = 0;
console.log(maximumBinaryStringSum(binaryStrings6, k6)); // 7 (No flips, only one string)
