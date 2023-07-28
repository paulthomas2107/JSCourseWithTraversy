// Ways to declare vars
// var (being phased out), let, const (not to be reassigned)

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Conventions
// Not start number
// letter, numbers, underscores, $

// firstName - camel case
// first_namee - underscore
// FirstName - pascal
// firstname - lowercase

// Reassigning
age = 31;
console.log(age);

let score;
score = 1;
score++;
console.log(score);

const drive = 1233;
console.log(drive);
// const drive2; not allowed - must be set
// drive++ not allowed
console.log(drive);

const arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1);
arr1.pop();
console.log(arr1);

const person = {
  name: 'Paul',
};

console.log(person)
person.name = 'John' // ok
//person = 'Ken' // not allowed
console.log(person); 
person.email = 'p@p.com' //ok
console.log(person);


