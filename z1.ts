/**
 * https://leetcode.com/discuss/interview-experience/943499/Zalando-or-Germany-or-codility-test-or-21-Nov-'20-or-REJECT
 * Quest1: Get search results from the save contacts for the number you entered.
Task Description:
When you open the dialer of your phone and start typing a number, you will probably get search results from the save contacts for the number you entered. Your task is to implement a similar feature.
Saved contacts are numbered from 0 to N-1. They are represented by two arrays A,B of N strings each. Name of K-th contact is A[K] and phone number is B[K].
Write a function
class Solution { public String solution(String[] A, String[] B, String P); }
which, given two arrays A and B and a string P of length M representing a partial phone number, returns the contact name whose phone number contains P as a substring, that is a contiguous segment (for example, “436800143” contains as a substring “6800”, but not “3614”).
If there is more than one contact matching the search criteria, your function should return the alphabetically smallest contact name.
If no match is found, your function should return “NO CONTACT”.
Examples:
Given A = [“pim”, “pom”], B = [“999999999”, “777888999”] and P = “88999”, your function should return “pom”, because only pom’s phone number contains “88999”.
Given A = [“sander”, “amy”, “ann”, “michael”], B = [“123456789”, “234567890”, “789123456”, ‘“123123123”’] and P = “1”, your function should return “ann”. Note that sander, ann and michael’s phone number contain “1” but “ann” is alphabetically smaller.

rule
1 <= A, B <=10
1<=P.len
*/

/**
 * A = [“pim”, “pom”], B = [“999999999”, “777888999”] and P = “88999” -> pom
 * A = [“sander”, “amy”, “ann”, “michael”], B = [“123456789”, “234567890”, “789123456”, ‘“123123123”’] and P = “1” -> ann
 *
 * arr[sander, ann, mich]->sort()-> return arr[0]
 *
 * arr=[]
 *
 * psudo code
 * loop B i=0, B.len
 *  if b contains 1
 *   arr.push(A[i])
 *
 * arr.sort()
 * return arr[0]
 *
 * tc o(n)
 * sc o(n)
 *
 *
 */
export {};

const solution = (a: string[], b: string[], p: string): string => {
  const arr = [];

  for (let i = 0; i < b.length; i++) {
    if (b[i].includes(p)) {
      arr.push(a[i]);
    }
  }

  arr.sort();
  return arr[0];
};

console.log(solution(['pim', 'pom'], ['999999999', '777888999'], '88999')); // pom
console.log(solution(['sander', 'amy', 'ann', 'michael'], ['123456789', '234567890', '789123456', '123123123'], '1')); // ann
