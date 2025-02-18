//  Multiplication of 2 very large numbers
/**Problem Statement: Multiplication of 2 Very Large Numbers

You are given two very large numbers, represented as strings, and your task is to calculate their product.
Since the numbers can be extremely large, you are not allowed to use built-in methods for multiplication,
 such as directly converting the strings to integers. 
 You need to implement a solution that handles the multiplication manually.
Input:

    Two strings num1 and num2 representing the two numbers.
     Each string consists of digits from '0' to '9'. Both strings have at most 104104 characters.

Output:

    Return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "123", num2 = "456"
Output: "56088"
Explanation: 123 * 456 = 56088

Example 2:

Input: num1 = "2", num2 = "3"
Output: "6"
Explanation: 2 * 3 = 6

Constraints:

    1≤num1.length,num2.length≤1041≤num1.length,num2.length≤104
    The numbers in the input strings are non-negative and do not have leading zeros, except for the number "0".

Follow-up:

    Can you optimize your solution to run in O(n⋅m)O(n⋅m) time complexity, where nn and mm are the lengths of num1 and num2 respectively? */

/**
 * 2025/02/17　思いつかず。明日また解く。
 *
 * ---
 * stringを数字に置き換えて掛け算して返すのも1つの案だけど、あまりに大きい数字の場合は、これは適さないらしい。
 * stringのまま計算をして、最後に数値にして返すのだとか。
 *
 * 0のarrayをstr1.len+str2.lenだけ作る。
 * 二重ループを作るけど、str1, str2の最後からi,jを走らせる。
 * 二重ループ内では、各桁ごと計算をする。(mul) 数字の文字列ー'0'をすることで、数字が取得できるので、これを掛け算する。
 * 配列を使っていくが、sum=mul+arr[i+j+1]を計算する。
 * 正しい値をarrに入れていきたい。キャリーオーバーなどの計算が必要となってくる・
 * arr[i+j+1]=sum%10(最後の桁だけ必要)
 * arr[i+j]=sum/10(残りはすべてキャリーオーバーするのでi+jに格納)
 *
 * 最後に、leading 0が含まれているかもしれないので、それを除去。最後にjoinして返す。
 *
 */

const multiply = (num1: any, num2: any): string => {
  // Special case for zero
  if (num1 === '0' || num2 === '0') return '0';

  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);

  // Reverse the numbers for easier multiplication
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const zero: any = '0';
      const mul = (num1[i] - zero) * (num2[j] - zero); // string-'0'をすることで数値に変換している。
      const sum = mul + result[i + j + 1]; // Add to the existing value in result

      result[i + j + 1] = sum % 10; // Store the last digit
      result[i + j] += Math.floor(sum / 10); // Carry over the rest
    }
  }

  // Convert the result array back to a string
  //let resultStr = result.join('').replace(/^0+/, ''); // Remove leading zeros

  while (result[0] === 0) {
    result.shift();
  }

  return result.join('');
};

console.log(multiply('123', '456')); // Output: "56088"
console.log(multiply('2', '3')); // Output: "6"
console.log(multiply('123456', '789')); // Output: "97406784"
