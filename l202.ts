function isHappy(n: number): boolean {
  const set = new Set();
  let test = 0;
  let arr = [1, 2, 3];

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = getN(n, test, arr);
  }

  return true;
}

const getN = (n: number, test: number, arr: number[]): number => {
  let sum = 0;
  test = test - 1;
  arr.splice(0, 1);
  console.log(arr);

  while (n > 0) {
    const rightDigit = n % 10;
    sum += rightDigit * rightDigit;
    n = Math.floor(n / 10);
  }

  return sum;
};

console.log(isHappy(7));
