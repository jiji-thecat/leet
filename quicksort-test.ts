/**
 * 2024/10/10 半分ほどしか覚えていないので明日もう1度トライする。
 * 2024/10/11 80％くらいできてたけど、最後に再帰するときmidを使っていた。正しくは、i,jのiを使わなくてはいけない。明日またやる。
 * 2024/10/13 スムーズに解けた。1週間後くらいにもう1度やってみる。
 * 2024/10/20 ちょっと怪しいところはあったが、スムーズに解けた。もうやらなくてOK
 *
 * ----
 * time complexity O(nlogn)のソートアルゴリズム。
 * pivotを決めて、そのpivotより小さいものを左に、大きいものを右に集めるように実装する。
 * pivotの決定方法は3値の中央値を取るやり方にすると、O(nlogn)に近づく。
 * pivotを一番右に置いて、i, jで最初と最後から挟み撃ちをして進めていく。
 * 該当するものがあれば、i, jを入れ替える。i, jが衝突したら、pivotとiを入れ替える。
 * iはすでにソート済みなので、その前後（0~i-1とi+1~nums.length-1）に同じ処理を加える。（再帰）
 *
 */

export {};

const getBigger = (nums: number[], a: number, b: number) => {
  return nums[a] > nums[b] ? a : b;
};

const getMedium = (nums: number[], a: number, b: number) => {
  const mid = b + Math.floor((b - a) / 2);
  const bigger = getBigger(nums, a, b);
  const bigger2 = getBigger(nums, mid, bigger);

  if (bigger2 === a) {
    return getBigger(nums, mid, b);
  }
  if (bigger2 === b) {
    return getBigger(nums, mid, a);
  }
  return bigger;
};

const quickSort = (nums: number[], l: number, r: number) => {
  if (l >= r) {
    return;
  }

  const pivotIndex = getMedium(nums, l, r);
  [nums[r], nums[pivotIndex]] = [nums[pivotIndex], nums[r]];

  let pivot = nums[r];

  let i = l - 1;
  let j = r;

  while (true) {
    while (nums[++i] < pivot);
    while (i < --j && nums[j] > pivot);

    if (i >= j) {
      break;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  [nums[i], pivot] = [pivot, nums[i]];

  quickSort(nums, l, i - 1);
  quickSort(nums, i + 1, r);
};

const sort = (nums: number[]) => {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
console.log(sort(nums));
