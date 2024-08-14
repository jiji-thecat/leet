// lとrを動かしつつ、値を見ながらlも動かす、二重ループ。
function minSubArrayLen(target: number, nums: number[]): number {
  let r = 0;
  let l = 0;
  let sum = 0;
  let minSum = Number.MAX_SAFE_INTEGER;

  const n = nums.length;

  while (r < n) {
    sum += nums[r];

    while (sum >= target) {
      minSum = Math.min(minSum, r - l + 1);
      sum -= nums[l];
      l++;
    }
    r++;
  }

  return minSum === Number.MAX_SAFE_INTEGER ? 0 : minSum;
}
