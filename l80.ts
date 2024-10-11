export {};
function removeDuplicates(nums: number[]): number {
  const map = new Map();

  nums.forEach((v, index) => {
    console.log(map);
    if (map.has(v)) {
      if (map.get(v) >= 2) {
        nums.splice(index, 1);
        console.log(nums, index, index + 1);
      } else {
        map.set(v, map.get(v) + 1);
      }
    } else {
      map.set(v, 1);
    }
  });

  return nums.length;
}

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);
