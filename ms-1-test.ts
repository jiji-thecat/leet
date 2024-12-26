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
 *
 * 3. Given A = [2, 7, 2, 9, 8], your function should return 2.
 * The first and the third guests should be accommodated in one room and the other three guests in another room.
 *
 *
 * 4. Given A = [7, 3, 1, 1, 4, 5, 4, 9], your function should return 4.
 *  The guests can be accommodated as follows: the first two guests in one room,
 * the third and the fourth guests in two single rooms, and the other guests in another room.

 *
 * Write an efficient algorithm for the following assumptions:
 * • N is an integer within the range [1..100,000];
 * • each element of array A is an integer within the range [1..100,000].
 */

/**
 *
 * You are given an array A of N integers: the K-th guest wants to be in a room that contains at most A[K] guests,
 * including themselves.
 * return how many rooms are required.
 *
 * [2, 1, 4] -> 2
 * edge: [3]->1
 *
 * 1. sort
 * [1,2,4]
 * 2. loop nums and calc room capacity
 * ans=0
 * for(let i=0, i<nums.len)
 *  ans++
 *  roomSize=n[i]
 *  roomCap=0
 *  while(i<nums.len && roomCap<roomSize)
 *   roomCap++
 *   i++
 *
 * return ans
 *
 * tc o(nm)
 * sc o(1)
 */

export {};

const solve = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let i = 0;
  while (i < nums.length) {
    const roomSize = nums[i];
    let roomCap = 0;
    ans++;

    while (i < nums.length && roomCap < roomSize) {
      roomCap++;
      i++;
    }
  }

  return ans;
};
console.log(solve([1, 1, 1, 1, 1])); // 5
console.log(solve([2, 1, 4])); // 2
console.log(solve([2, 7, 2, 9, 8])); // 2
console.log(solve([7, 3, 1, 1, 4, 5, 4, 9])); // 4