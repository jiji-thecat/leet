function removeElement(nums: number[], val: number): number {
  let k = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      k++;
    } else {
      i++;
    }
  }

  for (let n of nums) {
    console.log(n);
  }

  return k;
}

let num = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(num, 2);
