var path = window.location.pathname.split('/');
document.getElementById('pageTitle').innerHTML = path[1];
document.getElementById('bodyName').innerHTML = path[1];

let x;
const todo = new Object();

x = todo;

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
console.log(x, typeof x);

const person = {
  address: {
    coords: {
      lat: 42.1,
      long: -98.1,
    },
  },
};

y = person.address.coords.lat;
console.log(y);
console.log(x, typeof x);

// Spread
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4, typeof obj4);

// Assign - old skool
const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5, typeof obj4);

const todos = [
  {
    id: 1,
    name: 'Make Dinner',
  },
  {
    id: 2,
    name: 'Make Breakfast',
  },
  {
    id: 3,
    name: 'Make Lunch',
  },
];

x = todos;
console.log(x);

x1 = todos[2].name;
console.log(x1);

x = Object.keys(todo);
console.log(x);

x = Object.keys(todo).length;
console.log(x);

x = Object.values(todo);
console.log(x);

x = Object.entries(todo);
console.log(x);

x = todo.hasOwnProperty('name');
console.log(x);

x = todo.hasOwnProperty('not_found');
console.log(x);
