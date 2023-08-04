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

// Truthy / Falsey values
const email = 'test@test.com';

if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email)); //true as a string with anything in it is a truthy value
console.log(Boolean(undefined)); // false

// Falsy Values
// false
// 0
// "" or '' (empty string)
// null
// undefined
// NaN

const x1 = false;
console.log(Boolean(x1));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

const x3 = [];
console.log(Boolean(x3)); // truthy
const x4 = {};
console.log(Boolean(x4)); // truthy
const x5 = function (x) {};
console.log(Boolean(x5)); // truthy

// Truthy and falsy caveats
const children = 0;
if (children != undefined) {
  console.log(`You have ${children} kids`);
} else {
  console.log('Enter number of kids');
}

if (!isNaN(children)) {
  console.log(`You have ${children} kids`);
} else {
  console.log('Enter number of kids');
}

// Truthy
// Everthing else is not falsy
// true
//  '0'
// ' ' one space etc
// 'false'
// [] empty array is true
// {} empty object is true
// function () {} empty is true

// Checkimg for empty arrays
const posts = ['Post1', 'Post2'];
if (posts) {
  console.log(posts);
} else {
  console.log('No Posts');
}

if (posts.length > 0) {
  // check for empty array
  console.log(posts);
} else {
  console.log('No Posts');
}

const user = {
  name: 'Paul',
};

if (user) {
  // shows
  console.log('List User');
} else {
  console.log('No user');
}

const user2 = {};

if (Object.keys(user2).length > 0) {
  // check content of object array
  // still shows even though obj is empty
  console.log('List User');
} else {
  console.log('No user');
}

// Loose equality
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined); // All true with ==

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined); // All false with ===

// Logical operators and/or etc
console.log(10 > 20 && 30 > 15); // everthing has to be true. first one not true etc (&& and)
console.log(10 > 20 || 30 > 15); // either can be true (|| or)

// && - will return first falsey value or last value
let a;

a = 10 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = false && 20;
console.log(a);

a = true && 20;
console.log(a);

a = 10 && '' && 0 && 30;
console.log(a); // empty string

const posts2 = ['Post One', 'Post Two'];
console.log(posts2[0]);

const posts3 = ['aaa', 'bbb'];
posts3.length > 0 && console.log(posts3[0]); // only shows if true

//  || will return first truthy value or last
let b2;
b2 = 10 || 20;
console.log(b2);
b2 = 0 || 20;
console.log(b2);
b2 = 0 || null || '' || undefined;
console.log(b2);

// ?? Returns the right side operand when the left is null or undefined
let c1;
c1 = undefined ?? 20;
console.log(c1);
c1 = null ?? 30;
console.log(c1);
c1 = 99 ?? 20;
console.log(c1);
c1 = 99 ?? null;
console.log(c1);

// Logical assignment
// ||= assigns the right side value only if left is a falsy value
// &&= assigns the right side value only if left is a truthy value
// ??= assigns the right side value only if left is a null or undefined

// ||=
let a3 = false;
a3 = a3 || 20;
console.log(a3);
a3 = a3 && 30;
console.log(a3);
a3 = undefined;
a3 = a3 ?? 40;
console.log(a3);

// &&=
a3 = 20;
a3 = a3 && 20;
console.log(a3);
a3 &&= 50;
console.log(a3);

// ??=
a3 = null;
a3 ??= 120;
console.log(a3);
a3 = undefined;
a3 ??= 240;
console.log(a3);
