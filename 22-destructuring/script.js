var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

const firstName = 'John';
const lastName = 'Doe';
const age = 39;

// Basic
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

const person2 = {
  firstName,
  lastName,
  age,
};

console.log(person.age);
console.log(person2.age);

// Destructuring
const todo = {
  id: 1,
  title: 'Get Lunch',
  user: {
    name: 'Paul',
    age: 22,
  },
};

// Basic
const id2 = todo.id;
console.log(id2);

// Destructuree with aliases
const {
  id: todoId,
  title,
  user: { name: name1, age: age1 },
} = todo;
console.log(todoId, title, name1, age1);

// Destructure arrays
const numbers = [23, 67, 33, 49] 
const [first, second, ...rest] = numbers
console.log(first, second, rest)
