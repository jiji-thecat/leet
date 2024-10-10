// time O(nlogn)

const isBiggerIndex = (nums: number[], a: number, b: number): number => {
  return nums[a] > nums[b] ? a : b;
};

const getMedian = (nums: number[], a: number, b: number) => {
  const midIndex = a + Math.floor((b - a) / 2);
  const isBiggestIndex = isBiggerIndex(nums, a, b);
  const isBiggest = isBiggerIndex(nums, midIndex, isBiggestIndex);

  if (isBiggest === a) {
    return isBiggerIndex(nums, b, midIndex);
  }
  if (isBiggest === b) {
    return isBiggerIndex(nums, a, midIndex);
  }
  return isBiggestIndex;
};

const partition = (nums: number[], l: number, r: number): number => {
  const pivotIndex = getMedian(nums, l, r);
  [nums[r], nums[pivotIndex]] = [nums[pivotIndex], nums[r]];

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

  [nums[i], nums[r]] = [nums[r], nums[i]];
  return i;
};

const quickSort = (nums: number[], l: number, r: number): void => {
  if (l >= r) {
    return;
  }

  const v = partition(nums, l, r);
  quickSort(nums, l, v - 1);
  quickSort(nums, v + 1, r);
};

const sort = (nums: number[]): number[] => {
  quickSort(nums, 0, nums.length - 1);

  return nums;
};

let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
console.log(sort(nums));
