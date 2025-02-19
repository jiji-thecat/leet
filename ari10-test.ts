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

export {};
const multiply = (num1: any, num2: any): string => {};

console.log(multiply('123', '456')); // Output: "56088"
console.log(multiply('2', '3')); // Output: "6"
console.log(multiply('123456', '789')); // Output: "97406784"
