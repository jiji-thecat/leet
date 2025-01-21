interface Person {
  name: string;
}

function introduce(this: Person, role: string, location: string) {
  console.log(`Hi, I'm ${this.name}. I'm a ${role} from ${location}.`);
}

const person: Person = { name: 'Alice' };

// callとapplyを使ってintroduceを実行してみましょう。
// それぞれで引数の渡し方に違いがあるので確認してみてください。
introduce.call(person, 'software engineer', 'japan');
introduce.apply(person, ['software engineer', 'japan']);

function greet(this: Person, person: string) {
  console.log(`Hello, my name is ${this.name} and I'm greeting ${person}.`);
}

// `bind` を使って新しい関数を作成し、それを実行してみましょう。

const greetFunc = greet.bind(person);
greetFunc('Pikachu');
