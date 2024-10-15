// フィボナッチ数列とは、前の数字を足してできたものを並べた数列。
// 1,1,2,3,5,8,13...

// 一般的にこう解くけど、これだとnが大きいとすごい時間かかる
const fibonacciLong = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return fibonacciLong(n - 1) + fibonacciLong(n - 2);
};

// すでに計算した数字はメモ化することで、時間を短縮できる。
// 例えばf(4) + f(3)★であれば、f(4)を計算する過程で、f(3)★'がでてくる。
// そのときにメモ化しておけば、f(3)★を計算しなくてはいけないときに、メモの値を使えばよいので、時間短縮。
function fibonacci(n: number, memo: any = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(4));
console.log(fibonacciLong(4));
