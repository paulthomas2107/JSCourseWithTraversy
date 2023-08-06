// For Loop
for (let x = 0; x <= 10; x++) {
  console.log(x);
}

const basket = ['strawberries', 'peaches', 'oranges'];

// For each
basket.forEach((item) => {
  console.log(item);
});

// Simplified
basket.forEach((item) => console.log(item));

// For of
for (item of basket) {
  console.log(item);
}

// Keys (item no)
for (item in basket) {
  console.log(item);
}

// Nested loops
for (let i = 1; i <= 3; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loopo thru array
const names = ['Paul', 'Caitlin', 'Rory', 'Bob', 'Fred', 'Rita'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  if (names[i] === 'Bob') {
    console.log('Hi Bob !');
  }
}
