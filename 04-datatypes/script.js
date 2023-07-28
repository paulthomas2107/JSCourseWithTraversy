// BigInt
const x = BigInt(123_456_789_101_123);
console.log(x);

// String
const firstName = 'Sarah';
const output = firstName;
const age = 30;
const temp = 98.8;
console.log(output, typeof firstName, age, temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Undefined
let score;
console.log(score, typeof score);
const h1 = undefined;
console.log(h1);

// Symbol
const id = Symbol('id9999');
const id1 = id;
console.log(id1, typeof id1);

// More BigInt
const n = BigInt(99999999999n);
console.log(n, typeof n);

// Reference Types
const numbers = [1, 2, 3, 5];
console.log(numbers, typeof numbers);
const p2 = {
  name: 'paul',
  age: 222,
  isHome: true,
};
console.log(p2, typeof p2);

function sayHello() {
  return 'Hello';
}
console.log(sayHello(), typeof sayHello);

const dogAge = 12;
let animal1 = {
  type: 'Dog',
  age: dogAge,
};

console.log(animal1, typeof animal1);
let newAge = age;
newAge = 14
let newAnimal = animal1;
console.log(newAnimal, typeof newAnimal)
