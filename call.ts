// specify this and call function immediately.
export {};

interface Person {
  name: string;
}

function greet(this: Person, name: string) {
  console.log(`Hello, ${name}! I'm ${this.name}`);
}

const person = { name: 'Alice' };

greet.call(person, 'Bob'); // 'Hello, Bob! I'm Alice'
