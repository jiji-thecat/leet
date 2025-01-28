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
console.log(fibonacci(100));
console.log(fibonacciLong(100));
