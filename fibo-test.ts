/**
 * summary
 *  fibonacci is number list that is consisted by adding 2 values
 *  1,1,2,3,5,8,13...
 *  make a function that calculates x th fibonacci number
 *
 * example
 *  4 -> 3
 *  5 -> 5
 *
 * edge
 *  -
 *
 * memo
 *
 * solution
 *  1. straight forward
 *  2. dynamic programing
 *
 */

export {};

const fibonacci = (n: number, memo: any = []): number => {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

const fibonacciLong = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacciLong(n - 1) + fibonacci(n - 2);
};

function fibonacciNoRec(n: number) {
  if (n <= 1) return n;

  let prev2 = 0,
    prev1 = 1,
    cur = 0;

  for (let i = 2; i <= n; i++) {
    cur = prev1 + prev2;
    prev2 = prev1;
    prev1 = cur;
  }

  return cur;
}
console.log(fibonacciNoRec(100));
console.log(fibonacci(100));
console.log(fibonacciLong(100));
