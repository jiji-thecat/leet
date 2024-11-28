export {};
const arr = [10, 3, 4, 2, 6];

//arr.sort((a, b) => a - b); // 1,2,3,4

/**
 * a>b [b, a]
 * a<b [a, b]
 * a=b [a,b]
 */
arr.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

console.log(arr);

/**
 * Absolute Value Sort

Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

Examples:

input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]

Constraints:

    [time limit] 5000ms
    [input] array.integer arr
        0 ≤ arr.length ≤ 10
    [output] array.integer

 */

const arr2 = [2, -7, -2, -2, 0]; // output [0, -2, -2, 2, -7]
arr2.sort((a, b) => {
  if (Math.abs(a) > Math.abs(b)) return 1;
  else if (Math.abs(a) < Math.abs(b)) return -1;
  else {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
  }
});
console.log(arr2);
