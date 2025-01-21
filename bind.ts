// specify this but execute the function later.
export {};

interface Person {
  name: string;
}

function greet(this: Person, greeting: string) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const person: Person = { name: 'Alice' };

// `bind` を使って関数を新しい関数にバインド
const boundGreet = greet.bind(person);

// 新しく作られた関数を実行
boundGreet('Hello'); // 'Hello, I'm Alice'
