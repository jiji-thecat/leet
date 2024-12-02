/**
 * 2024/10/10 ほとんど覚えていない。明日もう1度やる。
 * 2024/10/11 80％ほど覚えていた。midを含むか含まないかを覚えておいたほうがよい。あとはケアレスミス。変数名の付け方の工夫かな。明日もう1度やる。
 * 2024/10/13 スムーズに解けた。1週間後くらいにもう一度解く。
 * 2024/10/20 ケアレスミスが多い。3日後くらいにもう1度解く。
 * 2024/11/08 明日もう１度解く。完全に忘れた
 * 2024/11/11 8分で解けた。1週間後くらいにまたとく。
 * 2024/11/21 凡ミスが多い。1週間後またとく。
 * 2024/12/02 解けた。2週間後また解く。
 *
 * ---
 * merge sortはtime complexity O(nlogn)のソートアルゴリズム。
 * 配列を、部分配列に分けて行って、それをソートしつつ、マージする。
 * */

/**
 * merge sort is nlogn sort algo.
 * prepare 2 sorted arrays and iterate through first element and pick the smallest one and insert it to array.
 *
 * 1. divide 2 arrays
 * 2. compare arr1[i] and arr2[j] and pick the smallest one and put it to nums[beginning~]
 * 3. return array
 *
 */

export {};

let nums = [3, 11, 14, 17, 12, 15, 10, 16, 7, 18, 6, 19, 13, 2, 9, 1, 20, 4, 8, 5];
//let nums = [1, 8, 4, 10];
console.log(sort(nums));
