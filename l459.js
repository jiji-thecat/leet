var repeatedSubstringPattern = function (s) {
  const doubled = s + s;
  const newS = doubled.slice(1, doubled.length - 1);
  console.log(newS);

  return newS.includes(s);
};

const s = 'abab';
console.log(repeatedSubstringPattern(s));
