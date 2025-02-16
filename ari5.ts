// implement pow function https://leetcode.com/problems/powx-n/description/

/**
 * summary
 *  implement pow function
 *
 * example
 *  2,3 -> 2^3=8
 *  2,20 -> 1048576
 *  2,-3 -> (1/2)^3->0.125
 *
 * edge
 *  x^0->1
 *
 * memo
 * 2^20=2*2*2*2*...
 * [1,2,4,8,16,32..]
 * 2^20 = 2^10*2^10
 *
 */
export {};

const solution = (base: number, exponent: number): number => {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 1 / solution(base, -exponent);
  }

  const half = solution(base, Math.floor(exponent / 2));
  return exponent % 2 === 0 ? half * half : half * half * base;
};

console.log(solution(2, 3)); // 2^3=8
console.log(solution(2, 0)); // 1
console.log(solution(2, -3)); // 0.125
console.log(solution(2, 20)); // 1048576

//console.log(Math.pow(2, -3));
