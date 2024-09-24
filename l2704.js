/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val === val2) {
        return { value: true };
      } else {
        return { error: 'Not Equal' };
      }
    },
    notToBe: (val2) => {
      if (val !== val2) {
        return { value: false };
      } else {
        return { error: 'Not Equal' };
      }
    },
  };
};

console.log(expect(5).toBe(5, 6, 7));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
