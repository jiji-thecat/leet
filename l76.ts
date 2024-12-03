export {};

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return '';

  // Create a map for the frequency of characters in t
  const tMap: Map<string, number> = new Map();
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  // Initialize pointers and variables
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minWindow = '';
  let required = tMap.size; // Number of unique characters in t
  let formed = 0; // Number of characters that meet the requirement
  const windowCounts: Map<string, number> = new Map();

  while (right < s.length) {
    // Add the current character to the window
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // Check if the current character matches the requirement in tMap
    if (tMap.has(char) && windowCounts.get(char) === tMap.get(char)) {
      formed++;
    }

    // Try to shrink the window from the left
    while (formed === required) {
      // Update the minimum window if necessary
      const windowLength = right - left + 1;
      if (windowLength < minLength) {
        minLength = windowLength;
        minWindow = s.substring(left, right + 1);
      }

      // Remove the leftmost character from the window
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar)! - 1);

      if (tMap.has(leftChar) && windowCounts.get(leftChar)! < tMap.get(leftChar)!) {
        formed--;
      }

      left++;
    }

    // Expand the window to the right
    right++;
  }

  return minWindow;
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); // Output: "BANC"
console.log(minWindow('a', 'a')); // Output: "a"
console.log(minWindow('a', 'aa')); // Output: ""
