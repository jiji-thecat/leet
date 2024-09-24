/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const sumMap = new Map();
  const fibMap = new Map();
  const factMap = new Map();

  let sumCount = 0;
  let fibCount = 0;
  let factCount = 0;

  return function (...args) {
    return {
      sum: (a, b) => {
        if (a === undefined && b === undefined) {
          return sumCount;
        }
        const key = a + '-' + b;
        if (sumMap.has(key)) {
          return sumMap.get(key);
        }

        sumMap.add(key, a + b);
        sumCount++;
        return sumMap.get(key);
        return [1];
      },
      fib: (n) => {
        return [1];
      },
      factorial: (n) => {
        return [1];
      },
    };
  };
}

memoize;
