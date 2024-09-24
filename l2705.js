/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  let result = Array.isArray(obj) ? [] : {};

  for (let v in obj) {
    if (Array.isArray(obj[v])) {
      if (Array.isArray(result)) {
        result.push(compactObject(obj[v]));
      } else {
        result[v] = compactObject(obj[v]);
      }
    } else if (typeof obj[v] === 'object' && obj[v] !== null) {
      console.log(obj[v]);

      if (Array.isArray(result)) {
        result.push(compactObject(obj[v]));
      } else {
        result[v] = compactObject(obj[v]);
      }
    } else {
      if (!!obj[v]) {
        // console.log(obj[v]);
        if (Array.isArray(result)) {
          result.push(obj[v]);
        } else {
          result[v] = obj[v];
        }
      }
    }
  }

  return result;
};

const obj = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj));
