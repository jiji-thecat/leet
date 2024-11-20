// two sum

export {};

const twosum = (nums: number[], target: number) => {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  const ans = [];

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      ans.push([nums[l], nums[r]]);

      while (l < r && nums[l] === nums[l + 1]) {
        l++;
      }
      while (l < r && nums[r] === nums[r - 1]) {
        r--;
      }

      l++;
      r--;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return ans;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twosum([1, 2, 3, 4, 4, 5], 8));
