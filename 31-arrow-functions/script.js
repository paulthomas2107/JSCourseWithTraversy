function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// Arrow function syntax
const add2 = (a, b) => {
  return a + b;
};

// Simpler with implcit return
const add3 = (a, b) => a + b;
console.log(add2(3, 4));
console.log(add3(3, 4));

// Even Shorter with one parm - parenthesis not needed
const doubleMe = (a) => a * 2;
console.log(doubleMe(12));

// Returning an object
const createObject = () => ({
  // bracket round curlys
  name: 'Paul',
});
console.log(createObject());

// Also..
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n, 'In loop');
});

// Arrow function version in callback
numbers.forEach((n) => console.log(n, 'In loop...V2'));

// Simpler with attached array in a callback
[8, 10, 12, 12].forEach((n) => console.log(n, 'In loop...v3'));


