// if statements
if (true) {
  // passes and runs
  console.log('True');
}
if (false) {
  // passes and runs
  console.log('False');
}

let x = 10;
let y = 5;

if (x > y) {
  console.log(`${x} > ${y}`);
}

y = 5;
if (x === y) {
  console.log(`${x} === ${y}`);
} else {
   console.log(`${x} is not =  ${y}`);
}

// Scope
if (x !== y) {
  const z = 20
  console.log(`z is ${z}`)
}

