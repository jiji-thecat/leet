// npx ts-node l88.ts

/**
 p1,p2,kの3つを使ってポインタを使うように操作していく。 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
//  function merge(nums1: number[], m: number, nums2: number[], n: number): void {

//     let p1: number = m - 1
//     let p2: number = n - 1
//     let k: number = nums1.length - 1

//     while(p2 >= 0){
//         if(nums1[p1] > nums2[p2]){
//             nums1[k] = nums1[p1]
//             p1--
//         } else {
//             nums1[k] = nums2[p2]
//             p2--
//         }
//       k--
//     }
// };

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      nums1[k++] = nums1[i++];
    } else {
      nums1.splice(i, 1, nums2[j++]);
      i++;
      k++;
    }
  }

  while (i < m) {
    nums1[k++] = nums1[i++];
  }

  while (j < n) {
    nums1[k++] = nums2[j++];
  }
}

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];
const m = 3;
const n = 3;
merge(num1, m, num2, n);

const abc: number = -1;
console.log('nums1: ', num1[-1]);
