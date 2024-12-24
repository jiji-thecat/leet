/**
 * There are N guests (numbered from 0 to N-1) in a sanatorium waiting to be assigned a room.
 * In each room, any number of guests can be accommodated.
 *  However, not all guests like to have a lot of roommates.
 * You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K] guests,
 * including themselves.
 *  Write a function: int solution (vector<int> &A);
 * that, given the array A, returns the minimum number of rooms needed to accommodate all guests.
 *
 *  Examples: 1. Given A = [1, 1, 1, 1, 1], your function should return 5.
 *  Each guest should be accommodated in their own separate room.
 *
 * 2. Given A = [2, 1, 4], your function should return 2.
 *  The second guest should be accommodated in one room and the other two guests in another room.
 * 2: 1g, 2g
 * 1: 3g
 * 4
 *
 * 3. Given A = [2, 7, 2, 9, 8], your function should return 2.
 * The first and the third guests should be accommodated in one room and the other three guests in another room.
 *
 * 2: 1g, 3g
 * 7: 2g, 4g, 5g
 * 2:
 * 9:
 * 8:
 *
 *
 * 4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4.
 *  The guests can be accommodated as follows: the first two guests in one room,
 * the third and the fourth guests in two single rooms, and the other guests in another room.
 * 7: 1g,7g,8g
 * 3: 2g,5g,6g
 * 1: 3g
 * 1: 4g
 * 4:
 * 5:
 * 4:
 * 9:
 *
 * Write an efficient algorithm for the following assumptions:
 * • N is an integer within the range [1..100,000];
 * • each element of array A is an integer within the range [1..100,000].
 */

/**
 *
 * 2024/12/24 そもそも問題文が理解できない。明日またやる。
 *
 * ---
 * nums.lengthだけ病人がいて、各病人は最大人数nums[病人]の部屋にしか入りたく無い。なので病人の数はnums.lenだけいる。
 * [2,7,2,9,8]であれば、
 *  0病人目は2人までの部屋にしか入りたくない
 *  1病人目は7人までの部屋にしか入りたくない
 *  2病人目は2人までの部屋にしか入りたくない
 *  ...
 *
 * で、何部屋必要かを返せばよい。
 *
 * 少ない部屋数からゲストを詰めて行くのがよさそうなので、ソートをする。
 * [2,2,7,9,8]
 *
 * で、i=0, room=0とする。i<nums.lenの間、各nums[i]にゲストを詰めて計算しなくてはいけない
 * while(i<nums.len)
 *  room++
 *  let roomPpl=0
 *  const roomSize = nums[i];
 *  while(i<nums.len && roomPpl < roomSize){
 *    roomPpl++
 *    i++; // iは病人の数だから、roomPplでゲストを詰めていくたびにiを増やさなくてはいけない。
 * }
 *
 * 最後、roomを返す。
 *
 */

export {};

const solve = (nums: number[]): number => {
  let rooms = 0;
  let i = 0;
  nums.sort();

  while (i < nums.length) {
    const roomSize = nums[i];
    rooms++;
    let roomPeople = 0;

    while (i < nums.length && roomPeople < roomSize) {
      roomPeople++;
      i++;
    }
  }

  return rooms;
};

const nums = [7, 3, 1, 1, 4, 5, 4, 9];
console.log('ans ', solve([2, 2, 7, 8, 9]));
