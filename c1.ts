/**
 *  
  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4

  5F
  4F
  3F
  2F
  1F
  F
[1,3,1,4,2,3,5,4] X=5, return index 6
 i
edge: ---

*summary*
Find X from array A that apprears first
make sure 1 to X are all coverd

*solution*
1. loop A and set element to set and when we find X then search set if 1 to X is available(=set.size === X-1). If available return true, if not clear set and continue. last return -1

tc o(n)
sc o(n)

*test case*
(1, [1]) // 0
(5, [1,3,1,4,3,5,4]) // -1
(5, [1,3,5,1,2,3,4,5]) // 7

 */

export {};

function solution(X: number, A: number[]): number {
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    const elem = A[i];
    set.add(elem);

    if (set.size === X) {
      return i;
    }
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
console.log(solution(5, [1, 3, 5, 1, 2, 3, 4, 5])); // 6
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3])); // 4
