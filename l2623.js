/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const json = JSON.stringify([...args]);
    console.log(map);
    if (map.has(json)) {
      console.log('called');
      return map.get(json);
    }

    const res = fn(...args);
    map.set(json, res);
    return res;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
