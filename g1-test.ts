/**
 * 
Problem: Simplify an Arithmetic Expression

You are given an arithmetic expression as a string. Simplify the expression by following the standard mathematical rules and return the result.

The expression may contain:

    Variables (e.g., a, b, c, d), which represent unknown values.
    Addition (+) and subtraction (-) operators.
    Parentheses, which should be expanded appropriately.

Input

A single string S representing the arithmetic expression.
Output

A string representing the simplified expression, with terms reordered to preserve their original sequence.
Constraints

    Variables are represented by lowercase English letters (e.g., a, b, c).
    The input string will always be a valid expression (e.g., balanced parentheses).
    The operators are limited to addition (+) and subtraction (-).

Examples
Input:

a + b - (a - d)

Output:

b + d

Input:

x + y - (x - z + y)

Output:

z

Input:

m + n - (p - m)

Output:

n + m - p

Explanation

    When expanding parentheses, take care of the signs associated with each term.
    Combine like terms when possible (e.g., a - a = 0).
    Maintain the order of variables in the output for consistency with the input.

 * Note:
 * 2024/12/02 明日また解く。
 * 2024/12/04 5割ほど。。明日また解く。
 * 2024/12/04 全部しっかり解けた。まだ怪しいので2,3日後また解く。
 * 
 */

/**
 * a+b-(a-d) -> b+d
 *
 * 1. expand
 * a+b-(a-d) -> +a+b-a+d
 * - loop through s and use a stack and push sign before (
 * - use sign to remember the last sign
 * - if ) then pop stack
 *
 * 2. calc
 * +a+b-a+d->b+d
 *
 * 1. calculate coefficients using object map: {b: 1, d: 1}
 * - loop 0 to s.length
 * - if sign calculate with map
 * -- we have coeff and variable. ★
 * - if number remember coeff
 * - if variable remember variable
 * after loop do the last calc★
 * 2. convert to b+d from map.
 * -- entries() -> [[a, 0], [b, 1], [d, 1]]
 * -- filter v!==0 -> [[b, 1], [d, 1]], [[b, 1], [d, -1]]
 * -- map -> ["b", "d"], ["b", "-d"]
 * -- join("+") -> b+d, b+-d
 * -- convert +- -> -
 * 3. return value
 *
 * TC O(n)
 * SC O(n)
 *
 */

export {};

const expandExp = (str: string): string => {
  const stack = [1];
  let sign = 1;
  let ans = '';
  let i = 0;

  while (i < str.length) {
    const c = str.at(i);

    if (c === '+') {
      sign = stack[stack.length - 1];
      i++;
    } else if (c === '-') {
      sign = -stack[stack.length - 1];
      i++;
    } else if (c === '(') {
      stack.push(sign);
      i++;
    } else if (c === ')') {
      stack.pop();
      i++;
    } else {
      // a, 2a
      let str2 = '';

      while (i < str.length && /[a-z0-9]/.test(str.at(i)!)) {
        str2 += str.at(i);
        i++;
      }

      ans += (sign === -1 ? '-' : '+') + str2;
    }
  }

  return ans;
};

const calc = (str: string): string => {
  const replaceStr = (str2: string): string => {
    let final = '';
    let i = 0;
    while (i < str2.length - 1) {
      if (str2[i] === '+' && str2[i + 1] === '-') {
        final += '-';
        i += 2;
      } else {
        final += str2.at(i);
        i++;
      }
    }

    return final + str2.at(i);
  };
  const obj: { [key: string]: number } = {};
  let coeff = 0;
  let sign = 1;
  let variable = '';
  let i = 0;

  while (i < str.length) {
    const c = str.at(i);

    if (c === '+' || c === '-') {
      // calculate using coeff, variable
      // {a: 1}, {}
      if (variable) {
        obj[variable] = (obj[variable] ?? 0) + sign * (coeff || 1);
      }

      sign = c === '-' ? -1 : 1;
      i++;
    } else if (/[0-9]/.test(c!)) {
      let numStr = '';
      while (i < str.length && /[0-9]/.test(str.at(i)!)) {
        numStr += str.at(i);
        i++;
      }

      coeff = parseInt(numStr);
    } else if (/[a-z]/.test(c!)) {
      variable = c!;
      i++;
    } else {
      i++;
    }
  }

  if (variable) {
    obj[variable] = (obj[variable] ?? 0) + sign * (coeff || 1);
  }

  const fixStr = Object.entries(obj)
    .filter(([_, v]) => v !== 0)
    .map(([k, v]) => (v === -1 ? `-${k}` : v === 1 ? `${k}` : `${v}${k}`))
    .join('+');

  return replaceStr(fixStr);
};

const simplifyExpression = (str: string): string => {
  const expand = expandExp(str);
  return calc(expand);
};

// Test cases
console.log(simplifyExpression('a+b-(a-d)')); // Expected: "b+d"
console.log(simplifyExpression('m+n-(p-m)')); // Expected: "2m+n-p"
console.log(simplifyExpression('x+y-(x-z+(j+y)-(l-d+u))')); // Expected: "z-j+l-d+u"
