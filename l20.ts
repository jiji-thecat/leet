{
  function isValid(s: string): boolean {
    const opCheck: string[] = ['(', '{', '['];
    const clCheck: string[] = [')', '}', ']'];
    const stack: string[] = [];

    for (const char of s) {
      if (opCheck.find((value) => value === char)) {
        stack.push(char);
      } else {
        const findIndex = clCheck.findIndex((value) => value === char);
        console.log(stack);
        console.log(stack[0] === opCheck[findIndex]);
        if (stack[stack.length - 1] === opCheck[findIndex]) {
          stack.pop();
          continue;
        }

        return false;
      }
    }

    return stack.length === 0;
  }

  type objType = {
    [key: string]: string;
  };

  function isValid2(s: string): boolean {
    const paraObj: objType = { '(': ')', '{': '}', '[': ']' };
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
      if (Object.hasOwn(paraObj, s.at(i)!)) {
        stack.push(s.at(i)!);
      } else {
        if (paraObj[stack[stack.length - 1]] === s.at(i)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return true;
  }

  isValid2('{[]}');
}
