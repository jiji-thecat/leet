export {};
function merge(intervals: number[][]): number[][] {
  const ans: number[][] = [];
  intervals.sort((a, b) => {
    console.log(a[0], b[0]);
    console.log(a[1], b[1]);
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  ans.push(intervals[0]);

  for (let i = 1, j = 0; i < intervals.length; i++, j++) {
    const ansFirst = ans[j];
    const intervalFirst = intervals[i];

    if (ansFirst && ansFirst[0] <= intervalFirst[0] && intervalFirst[0] <= ansFirst[1]) {
      ans[j][1] = intervals[i][1];
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
}

// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
const intervals = [
  [0, 6],
  [0, 4],
  [0, 1],
];
console.log(merge(intervals));

const nums = [10, 1, 5, 20, 3];
nums.sort((a: number, b: number) => {
  // a-bでマイナスならaが先。
  return a - b;
});
