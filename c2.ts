/**
 * summary
 *  A includes 0 or 1. return number of index pairs that is (0,1)
 *  But (p,q) and p<q
 *
 * example
 *  [0,1,0,1,1] -> (0,1),(0,3),(0,4),(2,3),(2,4) -> 5
 *  [...] -> (..),(..).. 1000000000 -> -1
 *
 * edge
 *  [1] -> 0
 *
 * memo
 *  ans=-1
 *  [0,1,0,1,1]
 * [0,0,0,0...1]
 *
 * solution
 * 1. loop A and count possible pairs
 *
 *  count=0
 *  loop A i=0, i<A.len
 *  if(A[i]===0)
 *    filter = A.slice(i+1).filter(v => v === 1)
 *    count+=filter.len
 *  if(count>=1000000000){
 *   return -1
 *  }
 *  return count
 *
 * tc o(n+m)
 * sc o(1)
 *
 * 2. first find 0 and count numbers of 1
 * [0,1,0,1,1]
 *  ^ <=first 0 and nums 1 is sum=3
 *
 * next loop count 1 that passed
 * [0,1,0,1,1]
 *      ^
 *  countI = 1
 *  sum += sum-countI(3-1)
 *
 * return sum >= 1000000000 ? -1 : sum
 *
 * tc o(n)
 * sc o(1)
 *
 * [0,0,0,1,1]=6
 *  4,3,2,1,0
 */
export {};
function solution(A: number[]): number {
  if (A.length === 1) {
    return 0; // todo revisit
  }

  let sumOf1 = 0;
  let i = 0;
  for (i; i < A.length; i++) {
    if (A[i] === 0) {
      sumOf1 = A.slice(i + 1).filter((v) => v === 1).length;
      break;
    }
  }

  let count1 = 0;
  let sum = sumOf1;
  for (let j = i + 1; j < A.length; j++) {
    if (A[j] === 1) {
      count1++;
    } else if (A[j] === 0) {
      sum += sumOf1 - count1;
    }
  }

  return sum > 1000000000 ? -1 : sum;
}

console.log(solution([0, 1, 0, 1, 1])); // 5
console.log(solution([0, 0, 0, 1, 1])); // 6
console.log(solution([0])); // 0
console.log(solution([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])); // 10
console.log(solution([0, 1, 0, 1, 0, 1])); // 6
