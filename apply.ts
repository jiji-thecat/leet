// specify this and call function immediately with array arguments.
export {};

interface Person {
  name: string;
}

function greet(this: Person, greeting: string, age: number) {
  console.log(`${greeting}, I'm ${this.name} and I'm ${age} years old.`);
}

const person: Person = { name: 'Alice' };

// `apply` を使ってgreetを実行
greet.apply(person, ['Hello', 25]); // 'Hello, I'm Alice and I'm 25 years old.'
