/**
 * @param {string} s
 * @return {string}
 */
// eatをa1e1t1のハッシュに変換している。それをmapのkeyにして、strsを格納して行っている。
var getSignature = function (s) {
  const count = Array(26).fill(0);
  for (const c of s) {
    // console.log(c, c.charCodeAt(0), 'a'.charCodeAt(0));
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; // -a.charcodeat(0)をすることでa,b,cを0-26の数字にconvertできる
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
    }
  }

  return result.join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  const groups = new Map();

  for (const s of strs) {
    const signature = getSignature(s);
    if (!groups.has(signature)) {
      groups.set(signature, []);
    }
    groups.get(signature).push(s);
  }

  console.log(groups);
  groups.forEach((value) => result.push(value));

  return result;
};

const strs = ['eat', 'tea', 'aaet', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
