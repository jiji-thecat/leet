// Sieve of Eratosthenes
/**
 * Sure! Here is the problem statement for "Sieve of Eratosthenes" in English:

---

### **Problem Statement: Sieve of Eratosthenes**

The **Sieve of Eratosthenes** is an ancient algorithm used to find all prime numbers up to a specified integer. The algorithm works by iteratively marking the multiples of each prime number starting from 2.

#### **Task**

You are given a number `n` and you need to implement the Sieve of Eratosthenes to find all prime numbers less than or equal to `n`. You need to return a list of all prime numbers up to `n` in increasing order.

#### **Input**

- An integer `n` (1 ≤ n ≤ 10^6)

#### **Output**

- A list of prime numbers less than or equal to `n`.

#### **Example 1:**

```plaintext
Input: n = 10
Output: [2, 3, 5, 7]
```

#### **Example 2:**

```plaintext
Input: n = 30
Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

#### **Constraints**

- The input number `n` can be as large as 10^6, so your solution should be efficient enough to handle this upper limit.

#### **Explanation**

- In the example `n = 10`, the prime numbers less than or equal to 10 are `[2, 3, 5, 7]`.
- In the example `n = 30`, the prime numbers less than or equal to 30 are `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`.

---

2025/02/17 o(m*n)の方法で解いた。最適解で明日解く。
2025/02/19 o(nloglogn)で解けた。1週間後また解く。

---
エラトステネスのふるい。
配列を用意して、2,3,5...の倍数にマークをつけていって、最後に、マークのついていない配列indexを返すというもの。
配列arr n+1個で、trueを埋めた物を用意する。
arr[0]=arr[1]=false　とする。0,1は素数ではないため。

次に倍数にfalseをいれていく。
for(i=2; i*i<=num; i++)として、二重ループを書く。
 for(j=i*i; j<=num; j+=i) iずつ増えていけなくてはいけないため。
 　arr[j]=falseをしてつっこんでいく。

最後に、trueのindexだけ抽出して配列として返却する。

tc o(nlog(logn))
sc o(n)
 */

export {};
const solution = (n: number): number[] => {
  if (n === 1) {
    return [];
  }

  const arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.map((v, index) => (v ? index : -1)).filter((v) => v !== -1);
};

console.log(solution(10)); //[2, 3, 5, 7]
console.log(solution(30)); //[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
