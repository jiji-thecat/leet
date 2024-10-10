export {}; // cannot redeclare block-scoped variableのエラーがでる。グローバルスコープなので。これやると、このファイルはモジュールスコープということになるので、エラーはなくなる。
// const mergeSort = (nums: number[], l: number, r: number): void => {
//   if (l >= r) {
//     return;
//   }

//   let dummy = [];
//   const mid = l + Math.floor((r - l) / 2);

//   mergeSort(nums, l, mid);
//   mergeSort(nums, mid + 1, r);

//   dummy = nums.slice(l, mid + 1);

//   for (let j = r; j >= mid + 1; j--) {
//     dummy.push(nums[j]);
//   }

//   let i = 0;
//   let j = dummy.length - 1;
//   for (let k = l; k <= r; k++) {
//     if (dummy[i] <= dummy[j]) {
//       nums[k] = dummy[i++];
//     } else {
//       nums[k] = dummy[j--];
//     }
//   }
// };

const merge = (nums: number[], l: number, mid: number, r: number): void => {
  const left = nums.slice(l, mid + 1);
  const right = nums.slice(mid + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      nums[k++] = left[i++];
    } else {
      nums[k++] = right[j++];
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
