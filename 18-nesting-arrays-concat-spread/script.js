let x;
let fruits = ['apple', 'pear', 'oranges'];
let berries = ['strawberry', 'blueberry', 'raspberry'];

fruits.push(berries);
console.log(fruits);

x = fruits[3][1]; // blueberry
console.log(x, typeof x);

const allFruits = [fruits, berries];
x = allFruits;
console.log(x, typeof x);

x = allFruits[1][0]; // strawberry
console.log(x, typeof x);

// Concat together
fruits = ['apple', 'pear', 'oranges'];
berries = ['strawberry', 'blueberry', 'raspberry'];
x = fruits.concat(berries);
console.log(x, typeof x);

// Spread operator (...)
fruits = ['apple', 'pear', 'oranges'];
berries = ['strawberry', 'blueberry', 'raspberry'];
x = [...fruits, ...berries]; // spread operator same result as concat
console.log(x, typeof x);

// Flatten into one array
const arr = [1, 2, [3, 4], 5, [6, 7], 8]; // arrays within array
console.log(arr);
x = arr.flat();
console.log(x, typeof x);

// Static methods on Array object
x = Array.isArray(fruits);
console.log(x, typeof x);

x = Array.isArray('sss');
console.log(x, typeof x);

x = Array.from('123  45'); // makes individual array elements from each item
console.log(x, typeof x);

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);
console.log(x, typeof x);

