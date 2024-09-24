function maxProfit(prices: number[]): number {
  let profit = Number.MIN_SAFE_INTEGER;
  let i = 0;
  let maxIndex = 0;

  for (i = 0; i < prices.length; i++) {
    maxIndex = i;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j] && prices[maxIndex] < prices[j]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      break;
    }
  }

  while (i < maxIndex) {
    let calc = prices[maxIndex] - prices[i];
    if (calc > profit) {
      profit = calc;
    }

    i++;
  }

  return profit < 0 ? 0 : profit;
}

const num = [2, 1, 2, 1, 0, 1, 2];
console.log(maxProfit(num));
