function longestCommonPrefix(strs: string[]): string {
  const firstElement = strs[0].split('');
  let i = 0;

  while (i < firstElement.length) {
    for (let j = 1; j < strs.length; j++) {
      const v = strs[j].split('');

      if (firstElement[i] === v[i]) {
        continue;
      } else if (i > 0) {
        let result = [
          ...firstElement.map((value, index) => {
            if (index < i) {
              return value;
            }
          }),
        ];
        return result.join('');
      } else {
        return '';
      }
    }

    i++;
  }

  return strs[0];
}

const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
