export {};

const set = new Set();
const hello = () => {
  const arr = [1, 2, 3];
  set.add([...arr]);
  arr.pop();
};
hello();
console.log(set);

const arr2 = [1, 2, 3, 4];
let copy = arr2[2];
copy = 10;
console.log(arr2);
