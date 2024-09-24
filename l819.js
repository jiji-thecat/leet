/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const map = new Map();
  const set = new Set(banned);
  const pArray = paragraph
    .toLowerCase()
    .split(/[!?',;. ]/g)
    .filter((v) => v);

  for (const v of pArray) {
    if (set.has(v)) {
      continue;
    }

    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  }

  console.log(map);

  let max = -1;
  let keyAns = -1;
  map.forEach((v, key) => {
    if (v >= max) {
      max = v;
      keyAns = key;
    }
  });

  return keyAns;
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
