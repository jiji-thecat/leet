/**
 * 2024/10/10 ほとんど覚えていない。明日もう1度やる。
 * 2024/10/11 80％ほど覚えていた。midを含むか含まないかを覚えておいたほうがよい。あとはケアレスミス。変数名の付け方の工夫かな。明日もう1度やる。
 *
 * ---
 * merge sortはtime complexity O(nlogn)のソートアルゴリズム。
 * 配列を、部分配列に分けて行って、それをソートしつつ、マージする。
 * */

export {};

const merge = (nums: number[], l: number, mid: number, r: number): void => {
  const left = nums.slice(l, mid + 1);
  const right = nums.slice(mid + 1, r + 1); // midはleftに含まれているため、midはここでは省く。

  let i = 0;
  let j = 0;
  let k = l;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      nums[k++] = right[j++];
    } else {
      nums[k++] = left[i++];
    }
  }

  while (i < left.length) {
    nums[k++] = left[i++];
  }

  while (j < right.length) {
    nums[k++] = right[j++];
  }
};

const mergeSort = (nums: number[], l: number, r: number): void => {
  if (l >= r) {
    return;
  }
  const mid = l + Math.floor((r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  merge(nums, l, mid, r);
};

const sort = (nums: number[]): number[] => {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};
let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
//let nums = [1, 8, 4, 10];
console.log(sort(nums));
