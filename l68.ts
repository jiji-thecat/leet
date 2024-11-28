/**
words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16

- check str += words[i]+1 exceeds > maxWidth if not push to ans, if yes move next

curr=0;
loop i=0, i<words.length, i++
 if ans[curr].length < maxWidth
   ans[curr] += words[i]+" "
 else 
   curr++
 

[
   "This is an",
   "example of text",
   "justification.  "
]

loop but not for the last element
 s = ans[i];
 s = [this, is, an] len=8
 loop n=0 to n=8 (maxW-len)
   s[i] += " "
    if(i===s.length-1) i will decrement
    if(i===0) i will increment

loop for the last elemenet
 push space till maxWidth

 return ans

 TC O(n*m(adding space process))
 SC O(n)
 */
function fullJustify(words: string[], maxWidth: number): string[] {
  let ans = [words[0]]; // this

  let i = 1;
  let curr = 0;
  let isFirst = false;
  while (i < words.length) {
    const add = (isFirst ? '' : ' ') + words[i]; // this is an(10) +  example(8)
    if ((ans[curr]?.length ?? 0) + add.length < maxWidth) {
      if (isFirst) {
        ans[curr] = add;
      } else {
        ans[curr] += add;
      }
      i++;
      if (isFirst) {
        isFirst = false;
      }
    } else {
      curr++;
      isFirst = true;
    }
  }

  // extra spcase
  for (let i = 0; i < ans.length - 1; i++) {
    const s = ans[i].split(' '); // ["acknoledgement"]
    const spaceLen = maxWidth - s.reduce((ac, cu) => ac + cu.length, 0);
    /**
     *
     * j=0, sp=0 ["this ", "is", "an"]
     * j=1, sp=1 ["this ", "is ", "an"]
     */
    let sp = 0;
    for (let j = 0; j < spaceLen; j++) {
      if (sp !== s.length - 1 || s.length === 1) {
        if (s.length === 1) {
          s[sp] += ' ';
        } else {
          s[sp++] += ' ';
        }
      } else {
        sp = 0;
      }
    }
    ans[i] = s.join('');
  }

  //last loop
  let j = ans[ans.length - 1].length;
  while (j < maxWidth) {
    ans[ans.length - 1] += ' ';
    j++;
  }

  return ans;
}

const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
  maxWidth = 16;

console.log(fullJustify(words, maxWidth));
