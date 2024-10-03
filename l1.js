/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  const result = nums.forEach((v, index) => {
    let sub = target - v;

    if (map.has(sub)) {
      return [index, map.get(sub)];
    } else {
      map.set(v, index);
    }
  });

  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
