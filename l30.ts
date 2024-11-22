/**
we use 2 maps
1: frequency of words[]
2: words that we seen

s = barfoofoobarthefoobarman
words = ["bar","foo","the"]

barfoofoobarthefoobarman

 */
function findSubstring(s: string, words: string[]): number[] {
  const wordLen = words[0].length;
  const numberOfWords = words.length;
  const ans = [];
  const wordsMap = new Map();

  for (const s of words) {
    wordsMap.set(s, (wordsMap.get(s) || 0) + 1);
  }

  for (let i = 0; i < wordLen; i++) {
    const seenMap = new Map();
    let l = i;
    let r = i;
    let count = 0;

    while (r + wordLen <= s.length) {
      const w = s.slice(r, r + wordLen);
      r += wordLen;

      if (wordsMap.has(w)) {
        seenMap.set(w, (seenMap.get(w) || 0) + 1);
        count++;

        while (seenMap.get(w) > wordsMap.get(w)) {
          const w2 = s.slice(l, l + wordLen);
          seenMap.set(w2, seenMap.get(w2) - 1);
          count--;
          l = l + wordLen;
        }

        if (count === numberOfWords) {
          ans.push(l);
        }
      } else {
        seenMap.clear();
        count = 0;
        l = r;
      }
    }
  }

  return ans;
}

// Example usage:
// const s1 = 'barfoothefoobarman';
// const words1 = ['foo', 'bar'];
// console.log(findSubstring(s1, words1)); // Output: [0, 9]

// const s2 = 'wordgoodgoodgoodbestword';
// const words2 = ['word', 'good', 'best', 'word'];
// console.log(findSubstring(s2, words2)); // Output: []

// const s3 = 'barfoofoobarthefoobarman';
// const words3 = ['bar', 'foo', 'the'];
// console.log(findSubstring(s3, words3)); // Output: [6, 9, 12]

const s4 = 'lingmindraboofooowingdingbarrwingmonkeypoundcake';
const words4 = ['fooo', 'barr', 'wing', 'ding', 'wing'];
console.log(findSubstring(s4, words4)); // Output: [13]
