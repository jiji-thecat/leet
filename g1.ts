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
 */

/**
 * a+b-(a+d) => a+b-a-d => b-d
 * a+b-(a+d-(f-g)) => a+b-a-d+f-g => b-d+f-g
 * [-] // hold sign that is before ( )
 *
 * (1) simplify
 *
 * loop i=0 i<str.length
 *   if i+1 is (
 *      push str(i) to stack but cauculate with stack[stack.length-2] and put correct sign
 *
 *   if i is (
 *     continue; // do not want to push ( in ans
 *   if it is )
 *
 *
 *   if stack is not empty
 *     if str(i) is sign then calculate with stack[last] and put the correct sign to ans
 *     if str is variable do nothing
 *   else
 *    push str(i) to ans
 *
 * (2) calculate
 *
 *
 * a+b-(a+d)
 *    ^
 *
 * i=3, stack=[-], ans=a+b
 *
 */

const calc = (str: string) => {
  let stack: string[] = [];
  let ans = '';

  /**
   * a+b-(a-d-(a+b))
   * iiii iiiii
   *
   * i=3 stack=[-] i=5
   * i=4
   * i=5
   * i=6
   * i=7
   */

  let i = 0;
  while (i < str.length) {
    if (str.at(i + 1) === '(') {
      if (stack.length !== 0) {
        if (str.at(i) === '+') {
          stack.push(stack[stack.length - 1] === '-' ? '-' : '+');
        } else if (str.at(i) === '-') {
          stack.push(stack[stack.length - 1] === '-' ? '+' : '-');
        }
      } else {
        stack.push(str.at(i)!);
      }

      i += 2;
      continue;
    } else if (str.at(i) === ')') {
      stack.pop();
    } else {
      if (stack.length !== 0) {
        if (str.at(i) === '+') {
          ans += stack[stack.length - 1] === '-' ? '-' : '+';
        } else if (str.at(i) === '-') {
          ans += stack[stack.length - 1] === '-' ? '+' : '-';
        } else if (str.at(i - 1) === '(') {
          ans += stack[stack.length - 1];
          ans += str.at(i);
        } else {
          ans += str.at(i);
        }
      } else {
        ans += str.at(i);
      }
    }
    i++;
  }

  return ans;
};

console.log(calc('a+b-(a+d)')); //a+b-a-d -> b-d
console.log(calc('x+y-(x-z+y)')); //x + y - (x - z + y) -> x+y-x+z-y
console.log(calc('x+y-(x-z+(j+y)-(l-d+u))')); //x+y-x+z-j-y+l-d+u
console.log(calc('-(a+b-(c-d-(z-x-(-a-f))))')); //-a-b+c-d-z+x+-a-f
