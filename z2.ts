/**
 * Zalando | Germany | codility test | 06 SEP 2021

Find the time interval. Merge all the intervals to one.

EX:
[1,4],[2,4]----> 1---4 -> 3
[3,6],[5,9],[11,15]-------> 3---9 + 11--15, [3,9],[11,15] -> 6+4= 10

1---4
  2-4

3---6 
   5---9 
         11---15 

0. sort with first element
1. merge overlap

*psudo code*
prev=n[0]
ans=[]
loop i=1 to nums.len
 curr=nums[i]
 if curr[0] <= prev[1] // overlapped
  prev[0] = Math.min(curr[0], prev[0])
  prev[1] = Math.max(curr[1], prev[1])
 else
  ans.push(prev)
  prev = curr

ans.push(prev);

2. sum the difference

*psudo code*
res=0
loop ans
 res += ans[i][1]-ans[i][0]
 
return res

tc o(n)
sc o(1)
*/

export {};

const solution = (nums: number[][]) => {
  nums.sort((a, b) => a[0] - b[0]);

  let prev = nums[0];
  const arr = [];
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    if (curr[0] <= prev[1]) {
      prev[0] = Math.min(curr[0], prev[0]);
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      arr.push(prev);
      prev = curr;
    }
  }

  arr.push(prev);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][1] - arr[i][0];
  }

  return sum;
};

console.log(
  solution([
    [1, 4],
    [2, 4],
  ])
); // 3
console.log(
  solution([
    [3, 6],
    [5, 9],
    [11, 15],
  ])
); // 10
