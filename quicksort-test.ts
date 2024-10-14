/**
 * 2024/10/10 半分ほどしか覚えていないので明日もう1度トライする。
 * 2024/10/11 80％くらいできてたけど、最後に再帰するときmidを使っていた。正しくは、i,jのiを使わなくてはいけない。明日またやる。
 * 2024/10/13 スムーズに解けた。1週間後くらいにもう1度やってみる。
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

let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
console.log(sort(nums));
