let x;

// Array Literal
const numbers = [111, 222, 333, 444, 555];
const mixed = [1, 'Apple', 3, 4, 5, 'Pop', false, null, true];

// Array Constructor....use either
const fruits = new Array('apple', 'grape', 'kiwi');

console.log(numbers);
console.log(fruits);

x = numbers[0];
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = `My favourite fruit is ${fruits[2]}`;
console.log(x);

x = numbers.length;
console.log(x);

numbers.push(217);
x = numbers.length;
console.log(x);

console.log(fruits);
fruits[2] = 'Mango';
console.log(fruits);

fruits[fruits.length] = 'Blu    eberry';
console.log(fruits);
