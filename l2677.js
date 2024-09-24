/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length <= size) {
    return arr;
  }

  const result = [];
  console.log('a');

  for (let i = 0; i < arr.length; i += size) {
    const sub = [];
    for (let j = i; j < i + size; j++) {
      if (j >= arr.length) break;

      sub.push(arr[j]);
    }
    result.push(sub);
  }

  return result;
};

console.log(chunk([8, 5, 3, 2, 6], 6));
