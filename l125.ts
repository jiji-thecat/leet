function isPalindrome(s: string): boolean {
  //   const cs = s.toLowerCase().replace(/[¥s]|[^0-9a-z]/g, '');
  //   const revs = cs.split('').reverse().join('');
  //   console.log('', cs);
  //   console.log('', revs);
  //   return cs === revs;

  const ls = s.toLowerCase();
  const ss = ls.replace(/¥s/g, '');
  const ans = ss.replace(/[^0-9a-z]/g, '');

  let p = 0;
  let q = ans.length - 1;

  while (p < q) {
    if (ans.at(p) !== ans.at(q)) {
      return false;
    }
    p++;
    q--;
  }

  return true;
}

console.log(
  isPalindrome(
    "H8Co9Y8` FhB0MZ?cFd !? H?!YD'Pz7w?Ntiz86,LaEm't!H9 r!? 9q'.sWKS  !iA\".3Y1Gj8ev5S :.` ;7k.;.C?4 811s2K :e` s 'D?u7::::7u?D' s `e: K2;118 4?C.;.k7; `.: S5ve8jG1Y3.\"Ai!  SKW;.'q9 ?!r 9H!t'mEaL,68zitN?w7zP'DY!?H ?! dFc?ZM0BhF `8Y9oC8H"
  )
);
