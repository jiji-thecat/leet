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
 */

/**
 * 1. expand
 * a+b-(a-d) -> +a+b-a+d
 * - stack sign that is before (
 * - remember sign when +/-
 * - variable push sign and variable
 * 2. calc
 * +a+b-a+d -> b+d
 * map: {a: 0, b: 1, d: 1}
 *
 * - sign = s.at(0)
 * - loop i=1, i<s.length
 * -- if s.at(i) is +/- remember sign
 * -- else register s.at(i) to map and calc.
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
      let strVal = '';
      while (i < str.length && /[a-z0-9]/.test(str.at(i)!)) {
        strVal += str.at(i);
        i++;
      }

      ans += (sign === -1 ? '-' : '+') + strVal;
      sign = stack[stack.length - 1];
    }
  }

  return ans;
};

const calcExp = (str: string): string => {
  const replaceAns = (ans: string): string => {
    let i = 0;
    let newStr = '';

    while (i < ans.length - 1) {
      if (ans[i] === '+' && ans[i + 1] === '-') {
        newStr += '-';
        i += 2;
      } else {
        newStr += ans[i++];
      }
    }

    return newStr + ans[i];
  };
  let i = 0;
  let sign = 1;
  let coeff = 0;
  const obj: { [key: string]: number } = {};

  while (i < str.length) {
    const c = str.at(i);

    if (c === '+') {
      sign = 1;
      i++;
    } else if (c === '-') {
      sign = -1;
      i++;
    } else if (/[0-9]/.test(c!)) {
      coeff = parseInt(c!);
      i++;
    } else if (/[a-z]/.test(c!)) {
      let temp = '';
      while (i < str.length && /[a-z]/.test(str.at(i)!)) {
        temp += str.at(i);
        i++;
      }

      // obj={a: 1} temp=a, sign=-1
      // obj={}, temp=a, sign=-1
      // obj={}, temp=a, sign=-1, coeff=2
      if (obj[temp]) {
        obj[temp] = coeff === 0 ? obj[temp] + sign : obj[temp] + sign * coeff;
      } else {
        obj[temp] = coeff === 0 ? sign : sign * coeff;
      }
    } else {
      i++;
    }
  }

  const ans = Object.entries(obj)
    .filter(([_, v]) => v !== 0)
    .map(([k, v]) => {
      // {a: 1}, {a: 2}, {a: -1}
      return v === 1 ? `${k}` : v === -1 ? `-${k}` : `${v}${k}`;
    })
    .join('+');
  /**
   * obj={a: 0, b: 1, d: 1}
   * entries().filter(not val is 0)
   * map [b, d]
   * join("+")
   * replace +- -> -
   */
  return replaceAns(ans);
};

const simplifyExpression = (str: string): string => {
  const expand = expandExp(str);

  //return expand;
  return calcExp(expand);
};

// Test cases
console.log(simplifyExpression('a+b-(a-d)')); // Expected: "b+d"
console.log(simplifyExpression('m+n-(p-m)')); // Expected: "2m+n-p"
console.log(simplifyExpression('x+y-(x-z+(j+y)-(l-d+u))')); // Expected: "z-j+l-d+u"
