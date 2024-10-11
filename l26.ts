export {};

var removeDuplicates = function (nums: number[]) {
  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i - 1]) {
      console.log(nums[j], nums[i - 1]);
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

let nums = [1, 1, 2];
removeDuplicates(nums);
console.log(nums);
