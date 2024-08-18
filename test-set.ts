const set = new Set();
set.add(1).add(2);
set.add({ abc: 1 });

const i = 123;
const cell = 987;
const item = `row: ${i}, value: ${cell}`;
set.add(item).add({ id: 1 }).add({ poke: 2 });

console.log('set: ', set);
console.log('set has item: ', set.has(item));
