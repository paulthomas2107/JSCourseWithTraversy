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
  const z = 20;
  console.log(`z is ${z}`);
}

// Shorthand
if (x != y) console.log('Shorthand no brackets'), console.log('More');
else console.log('In an else');

// Else ifs...nesting
const d = new Date(1, 1, 2000, 20, 0, 0, 0);
const hour = d.getHours();
console.log(hour);
if (hour < 12) {
  console.log('Morning...');
} else if (hour < 18) {
  console.log('Afernoon...');
} else {
  console.log('Evening...');
}

// Nested if
if (hour < 12) {
  console.log('Morning...');
  if (hour === 6) {
    console.log('Wake Up');
  }
} else if (hour < 18) {
  console.log('Afernoon...');
} else {
  console.log('Evening...');
  if (hour > 22) {
    console.log('Good night');
  }
}

// Multiple conditons
if (hour >= 7 && hour < 15) {
  console.log('Work time');
}

// or using ||
if (hour === 6 || hour === 20) {
  console.log('Brush teeth');
}

// Switches
const d1 = new Date(2022, 4, 10, 8, 0, 0);
const month = d1.getMonth();
console.log(month);

switch (month) {
  case 1:
    console.log('It is Jan');
    break;
  case 2:
    console.log('It is Feb');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or Mar');
}

// Ranges
const hours = d1.getHours();
switch (true) {
  case hours < 12:
    console.log('...Morning');
    break;
  case hours < 18:
    console.log('...Afternoon');
    break;
  default:
    console.log('It is not Morning or Afternoon');
}

// Challenge
function calculator(num1, num2, operator) {
  if (num1 === undefined || num2 === undefined || operator === undefined) {
    console.log('Not all parms are supplied.');
    return;
  }
  if (isNaN(num1)) {
    console.log(`${num1} is not a nuumber `);
    return;
  }
  if (isNaN(num2)) {
    console.log(`${num2} is not a nuumber `);
    return;
  }
  let calcText;
  switch (operator) {
    case '+':
      calcText = `${num1} ${operator} ${num2} = ${num1 + num2}`;
      console.log(calcText);
      break;
    case '-':
      calcText = `${num1} ${operator} ${num2} = ${num1 - num2}`;
      console.log(calcText);
      break;
    case '*':
      calcText = `${num1} ${operator} ${num2} = ${num1 * num2}`;
      console.log(calcText);
      break;
    case '/':
      calcText = `${num1} ${operator} ${num2} = ${num1 / num2}`;
      console.log(calcText);
      break;
    default:
      console.log('Operator must be + - * or /');
  }
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');
