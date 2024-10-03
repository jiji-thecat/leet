function mostOccurringSubstring(s) {
  const n = s.length;
  const freqMap = new Map();

  // 部分文字列を全て生成し、頻度をカウント
  for (let length = 1; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const sub = s.substring(i, i + length);
      freqMap.set(sub, (freqMap.get(sub) || 0) + 1);
    }
  }

  let mostFrequent = '';
  let maxCount = 0;

  // 最も頻繁に現れる部分文字列を見つける
  for (const [sub, count] of freqMap) {
    if (count > maxCount) {
      mostFrequent = sub;
      maxCount = count;
    }
  }

  return { mostFrequent, maxCount };
}

// 使用例
const s = 'hello worlds';
const test = 'abcabcd';
console.log(test.split('abc'));

console.log(mostOccurringSubstring(s)); // { mostFrequent: 'a', maxCount: 3 }
