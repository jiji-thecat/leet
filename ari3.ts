// reverse string
/**
 * ### **Problem Statement:**  

Write a function that takes a string as input and returns the reversed version of that string.  

#### **Requirements:**  
- Do not use any built-in functions like `Array.reverse()`.  
- The solution should manually reverse the characters of the string using loops or other control structures.  

#### **Input:**  
A string `s` with a length of at least 1.  

#### **Output:**  
A new string that is the reverse of the input string.  

#### **Example:**  

```plaintext
Input: "hello"  
Output: "olleh"  

Input: "JavaScript"  
Output: "tpircSavaJ"  
```  

#### **Constraints:**  
- The function should handle strings containing spaces, numbers, and special characters.
 */

/**
 *
 * summary
 *  reverse string without using reverse()
 *
 * example
 *  hello->olleh
 *
 * edge
 *  a -> a
 *
 * memo
 *  hello->olleh
 *  i   j
 */

export {};

const solution1 = (str: string): string => {
  if (str.length === 1) {
    return str;
  }

  let fixedStr = str.split('');
  let i = 0;
  let j = fixedStr.length - 1;

  while (i < j) {
    [fixedStr[i], fixedStr[j]] = [fixedStr[j], fixedStr[i]];
    i++;
    j--;
  }

  return fixedStr.join('');
};

const solution2 = (str: string): string => {
  return '';
};

const solution = (str: string): string => {
  return solution1(str);
};

console.log(solution('abcde')); // edcba
console.log(solution('abcd')); // dcba
console.log(solution('a')); // a
