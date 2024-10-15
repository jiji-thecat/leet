export {};
function simplifyPath(path: string): string {
  let ans: string[] = [];

  let fixedPath = path.replace(/\/{2,}/g, '/');
  let split = fixedPath.split('/');
  if (split.at(split.length - 1) === '') {
    split.pop();
  }
  console.log(split);

  let skip = false;
  for (let i = split.length - 1; i >= 0; i--) {
    if (split[i] === '.') {
      continue;
    }
    if (skip) {
      skip = false;
      continue;
    }

    if (split[i] === '..') {
      skip = true;
    } else {
      ans.push(split[i]);
    }
  }

  ans.reverse();
  return ans.length === 0 ? '/' : ans.join('/');
}

console.log(simplifyPath('/../'));

const test: number[] = [];
console.log(test.pop());

console.log(1 + 1 + null);
