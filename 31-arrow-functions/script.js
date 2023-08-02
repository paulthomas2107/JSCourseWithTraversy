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


