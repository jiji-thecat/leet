/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 0;

  const h = haystack.split('');
  const n = needle.split('');

  while (i < n.length && j < h.length) {
    console.log('i: %d, j: %d', i, j);
    if (h[j] !== n[i]) {
      if (i !== 0) {
        i = 0;
        j--;
      } else {
        i = 0;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  console.log('i: %d', i);
  return i === n.length ? j - i : -1;
};

console.log(strStr('mississippi', 'issip'));
