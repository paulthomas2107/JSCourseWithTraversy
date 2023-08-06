// While loops
let i = 0;
while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// thru an array
i = 0;
const arr = [1, 4, 7, 8, 9, 10, 2, 3, 556, 12];
while (i <= arr.length - 1) {
  console.log('Number ' + arr[i]);
  i++;
}

// Nested while loops
i = 1; // outer counter
while (i <= 10) {
  let j = 1; // reset inner counter
  while (j <= 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++; // increment inner
  }
  i++; // increment outer
}

// Do while - always run at least once - only use if block of code needs running at least ONCE !
i = 4;
do {
  console.log('In do....Number ' + i);
} while (i < 3);

// Fizzbuzz Challenge
// For version
for (let x = 1; x <= 100; x++) {
  if (x % 15 === 0) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
}

// while version
let x = 1;
while (x <= 100) {
  if (x % 15 === 0) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
  x++;
}

// Do while version
x = 1;
do {
  x++;
  if (x % 15 === 0) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
} while (x <= 100);
console.log('End');

// Normal while
x = 1;
while (x <= 99) {
  x++;
  if (x % 15 === 0) {
    console.log('FizzBuzz');
  } else if (x % 3 === 0) {
    console.log('Fizz');
  } else if (x % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
}
console.log('End**');

// 
