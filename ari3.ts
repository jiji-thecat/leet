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

summary
 reverse string without using reverse()

example
 Input: "hello"  
 Output: "olleh"  

 Input: "JavaScript"  
 Output: "tpircSavaJ" 

edge
 "a"->"a"

memo
 1. loop from i=str.len-1 to 0 and put the value to newStr
 2. two pointer and swap
 3. split("") then pop, assign it to top and continue
 */
export {};

const solution1 = (str: string): string => {
  if (str.length === 1) {
    return str;
  }

  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str.at(i);
  }

  return res;
};

const solution2 = (str: string): string => {
  if (str.length === 1) {
    return str;
  }

  let l = 0;
  let r = str.length - 1;
  let strArr = str.split('');

  while (l < r) {
    [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
    l++;
    r--;
  }

  return strArr.join('');
};

const solution = (str: string): string => {
  return solution2(str);
};

console.log(solution('abcde')); // edcba
console.log(solution('abcd')); // dcba
console.log(solution('a')); // a
