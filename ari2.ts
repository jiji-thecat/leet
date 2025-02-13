/**
// Find missing number in a list of consecutive numbers
### **Problem Statement:**  

You are given a list of consecutive integers with one number missing. Write a function that finds and returns the missing number from the list.  

#### **Input:**  
- A list of integers `nums` where:  
  - The list contains all consecutive integers except one.  
  - The integers are sorted in ascending order.  
  - The length of the list is at least 2.  

#### **Output:**  
- An integer representing the missing number.  

#### **Example:**  

```plaintext
Input: [1, 2, 3, 4, 6, 7]  
Output: 5  
```

```plaintext
Input: [10, 11, 12, 14]  
Output: 13  
```

#### **Constraints:**  
- You can assume there will always be exactly one missing number in the list.  
- The input list may contain both positive and negative integers.
 */

/**
 * summary
 *  consecutive number array. find and return misssing number
 *
 * example
 *  [1,2,4,5]->3
 *
 * edge
 *  -
 *
 * memo
 *  [1,2,4,5]->3
 *   i m   j
 *
 * loop i<=j
 *  m = i+(j-i)/2
 *
 * if n[0] + m === n[m]
 *  i=m+1
 * else j=m-1
 *
 * ret n[0]+i
 *
 * tc o(logn)
 * sc o(1)
 *
 */

export {};

const solution = (nums: number[]): number => {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const m = i + Math.floor((j - i) / 2);

    if (nums[0] + m === nums[m]) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }

  return nums[0] + i;
};

console.log(solution([1, 2, 3, 4, 6, 7])); // 5
console.log(solution([-3, -1, 0, 1, 2])); // -2
