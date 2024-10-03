/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if ((sMap.has(s.at(i)) && sMap.get(s.at(i)) !== t.at(i)) || (tMap.has(t.at(i)) && tMap.get(t.at(i)) !== s.at(i))) {
      return false;
    }
    sMap.set(s.at(i), t.at(i));
    tMap.set(t.at(i), s.at(i));
  }

  return true;
};

const testMap = new Map();
testMap.set('a', 2);

console.log(testMap.get('a'));
console.log(testMap.get('b'));
