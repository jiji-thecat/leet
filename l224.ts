export {};
function calculate(s: string): number {
  let sign = 1;
  let result = 0;
  let number = 0;
  let stack = [];
  let i = 0;

  while (i < s.length) {
    const c = s.at(i);

    if (c === '+') {
      result += sign * number;
      sign = 1;
      number = 0;
      i++;
    } else if (c === '-') {
      result += sign * number;
      sign = -1;
      number = 0;
      i++;
    } else if (c === '(') {
      stack.push(result);
      stack.push(sign);
      result = 0;
      number = 0;
      sign = 1;
      i++;
    } else if (c === ')') {
      result += sign * number;
      result *= stack.pop()!;
      result += stack.pop()!;
      number = 0;
      sign = 1;
      i++;
    } else if (/[0-9]/.test(c!)) {
      let numStr = '';
      while (i < s.length && /[0-9]/.test(s.at(i)!)) {
        numStr += s.at(i);
        i++;
      }

      number = parseInt(numStr);
    } else {
      i++;
    }
  }

  if (number !== 0) {
    result += sign * number;
  }

  return result;
}

console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
//console.log(calculate('(1-(3-1)'));
