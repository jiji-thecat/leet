export {};

const fullJustify = (words: string[], maxWidth: number) => {
  let res = [];
  let cur = [];
  let num_of_letters = 0;

  for (let word of words) {
    if (word.length + cur.length + num_of_letters > maxWidth) {
      for (let i = 0; i < maxWidth - num_of_letters; i++) {
        cur[i % (cur.length - 1 || 1)] += ' ';
      }
      res.push(cur.join(''));
      cur = [];
      num_of_letters = 0;
    }
    cur.push(word);
    num_of_letters += word.length;
  }

  let lastLine = cur.join(' ');
  while (lastLine.length < maxWidth) lastLine += ' ';
  res.push(lastLine);

  return res;
};

console.log(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16));
/**
 [
   "This    is    an",
   "example  of text",
   "justification.  "
]
 */
