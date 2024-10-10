// quick sort is a sort algorithm that time complexity is O(nlogn)
// specify a pivot and reorder the array by putting the smaller value than the pivot to the left and big value on the right.
// And do that for left side and right side of the pivot till it becomes only one value.

export {};

const isBiggerIndex = (nums: number[], a: number, b: number): number => {
  return nums[a] > nums[b] ? a : b;
};

const getMedian = (nums: number[], a: number, b: number): number => {
  const mid = a + Math.floor((b - a) / 2);
  const bigger = Math.max(nums[a], nums[b]);
  const bigger2 = Math.max(bigger, nums[mid]);

  if (bigger2 === nums[a]) {
    return isBiggerIndex(nums, b, mid);
  }
  if (bigger2 === nums[b]) {
    return isBiggerIndex(nums, a, mid);
  }
  return isBiggerIndex(nums, a, b);
};

const partition = (nums: number[], l: number, r: number): number => {
  const pivotIndex = getMedian(nums, l, r);
  [nums[pivotIndex], nums[r]] = [nums[r], nums[pivotIndex]];

  let i = l - 1;
  let j = r;
  const pivot = nums[r];

  while (true) {
    while (nums[++i] < pivot);
    while (i < --j && nums[j] > pivot);

    if (i >= j) {
      break;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  [nums[r], nums[i]] = [nums[i], nums[r]];
  return i;
};

const quickSort = (nums: number[], l: number, r: number): void => {
  if (l >= r) {
    return;
  }
  const pivot = partition(nums, l, r);
  // Because center is already sorted.
  quickSort(nums, l, pivot - 1);
  quickSort(nums, pivot + 1, r);
};

const sort = (nums: number[]): number[] => {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
console.log(sort(nums));
