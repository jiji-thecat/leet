// function lengthOfLastWord(s: string): number {
//   const sArray = s.split('');
//   let start = 0;
//   let end = sArray.length - 1;
//   let count = 1;

//   while (sArray[end] === ' ') {
//     end--;
//   }

//   while (start !== end) {
//     if (sArray[start] !== ' ') {
//       count++;
//       start++;
//     } else {
//       count = 1;
//       start++;
//     }

//     if (sArray[end] === ' ') {
//       end--;
//     }
//   }

//   return count;
// }

// T: O(n)
// M: O(1)
function lengthOfLastWord(s: string): number {
  const sArray = s.split('');
  let count = 0;

  for (let end = sArray.length - 1; end > 0; ) {
    if (sArray[end] === ' ') {
      if (count !== 0) {
        break;
      }
      end--;
      count = 0;
    } else {
      end--;
      count++;
    }
  }

  return count;
}
