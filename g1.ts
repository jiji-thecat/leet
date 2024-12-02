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

function simplifyExpression(expression: string): string {
  // Expand parentheses and handle signs
  function expandExpression(expression: string): string {
    const stack: number[] = [1];
    let sign = 1;
    let expanded = '';
    let i = 0;

    while (i < expression.length) {
      const char = expression[i];

      if (char === '+') {
        sign = stack[stack.length - 1];
        i++;
      } else if (char === '-') {
        sign = -stack[stack.length - 1];
        i++;
      } else if (char === '(') {
        stack.push(sign);
        i++;
      } else if (char === ')') {
        stack.pop();
        i++;
      } else {
        // Read term (variable/number combination)
        let term = '';
        while (i < expression.length && /[a-z0-9]/.test(expression[i])) {
          term += expression[i];
          i++;
        }
        expanded += (sign === -1 ? '-' : '+') + term;
        sign = stack[stack.length - 1]; // Reset sign after term
      }
    }

    return expanded;
  }

  // Combine terms
  function simplifyTerms(expression: string): string {
    const terms: { [key: string]: number } = {};

    let i = 0;
    let sign = 1;
    let coeff = 0;
    let variable = '';

    while (i < expression.length) {
      const char = expression[i];

      if (char === '+' || char === '-') {
        if (variable) {
          terms[variable] = (terms[variable] || 0) + sign * (coeff || 1);
        }

        coeff = 0;
        variable = '';
        sign = char === '-' ? -1 : 1;
        i++;
      } else if (/[a-z]/.test(char)) {
        variable = char;
        i++;
      } else if (/[0-9]/.test(char)) {
        let numStr = '';
        while (i < expression.length && /[0-9]/.test(expression[i])) {
          numStr += expression[i];
          i++;
        }

        coeff = parseInt(numStr, 10);
      } else {
        i++;
      }
    }

    if (variable) {
      terms[variable] = (terms[variable] || 0) + sign * (coeff || 1);
    }

    return Object.entries(terms)
      .filter(([_, coeff]) => coeff !== 0) // Remove zero coefficients
      .map(([variable, coeff]) => (coeff === 1 ? variable : coeff === -1 ? `-${variable}` : `${coeff}${variable}`))
      .join('+')
      .replace(/\+\-/g, '-'); // Clean up "+-" to "-"
  }

  const expanded = expandExpression(expression);
  return simplifyTerms(expanded);
}

// Test cases
console.log(simplifyExpression('a+b-(a-d)')); // Expected: "b+d"
console.log(simplifyExpression('m+n-(p-m)')); // Expected: "2m+n-p"
console.log(simplifyExpression('x+y-(x-z+(j+y)-(l-d+u))')); // Expected: "z-j+l-d+u"
