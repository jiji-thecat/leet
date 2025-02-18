// const obj = {
//   name: 'Object',
//   greet: function () {
//     const arrow = function () {
//       console.log(this.name); // 厳格モードではundefined
//     };
//     arrow();
//   },
// };

// obj.greet(); // "Object" が出力される

// const str = 'hello';

// for (const mchar of str) {
// }

// function isValid2(s: string): boolean {
//   const paraObj = { '(': ')', '{': '}', '[': ']' };
//   let stack: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     if (Object.hasOwn(paraObj, s.at(i))) {
//       stack.push(s.at(i));
//     } else {
//       if (stack[stack.length - 1] === s.at(i)) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return true;
// }

let arr = new Array();
arr.push([1, 2]);
console.log(arr);

let a = 123;
let b = a;
a = 456;
console.log(a, b);

// aの参照先は{c:3}を持つ
let obj: any = { a: { c: 3 }, b: 2 };
//objCpは{c:3}への参照を受け取る
let objCp = obj.a;
// obj.aの参照先をnullに変更
obj.a = null;
// 参照先を変えたので、objCpは影響をうけない
console.log(obj, objCp);

const add = (a: number, b: number): number => {
  return a + b;
};
