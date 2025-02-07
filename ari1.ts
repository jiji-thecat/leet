/**
 * Given a string "_!helloworld5678234kjlm*&!", return alphanumeric string with groups of k.
 *  Make group of 3, but if 1 remains in end group, make 2 of 2, of all alphanum characters ignoring whitespace, ',' or '-'(see below example)

Input -> "1,23-456- 7 8"
Output - >"123 456 78"

Input-> "1,23-456- 7 89"
Output - > "123 456 789"

Input-> "1,23-456- 7 89A"
Output -> "123 456 78 9A"
 */

export {};

const solution = (str: string): string => {
  let refinedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/.test(str.at(i)!)) {
      refinedStr += str.at(i);
    }
  }

  let res = '';
  let i = 0;
  while (i < refinedStr.length) {
    let add = 3;
    if (refinedStr.length - i === 4) {
      add = 2;
    }
    const limit = i + add;
    while (i < refinedStr.length && i < limit) {
      res += refinedStr[i];
      i++;
    }
    res += ' ';
  }

  return res.trim();
};

const solution2 = (str: string): string => {
  // 非英数字を除去
  const refinedStr = str.replace(/[^a-zA-Z0-9]/g, '');
  let res = '';
  let i = 0;

  while (i < refinedStr.length) {
    // 残りが4文字なら2 + 2のブロックにする
    const add = refinedStr.length - i === 4 ? 2 : 3;
    res += refinedStr.slice(i, i + add) + ' ';
    i += add;
  }

  return res.trim(); // 最後の空白を除去
};

console.log(solution('1,23-456-'));
console.log(solution('1,23-456- 7'));
console.log(solution('1,23-456- 7 8'));
console.log(solution('1,23-456- 7 89'));
console.log(solution('abc1234xyz')); // abc 123 4x yz
console.log(solution('abcdefgh')); // abc def gh
console.log(solution('abcdefghijklmnopqrstuv'));
console.log(solution('1234-56,78 9')); // 123 456 78 9
