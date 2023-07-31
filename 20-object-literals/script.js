let x;

const person = {
  name: 'Paul Thomas',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['Music', 'Sports'],
};

console.log(person, typeof person);

x = person.name;
console.log(x);

x = person['name'];
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies;
console.log(x);

x = person.hobbies[1];
console.log(x);

person.name = 'Jane Doe';
console.log(person, typeof person);

person.isAdmin = false;
console.log(person, typeof person);

// Delete element
delete person.age;
console.log(person, typeof person);

// put it back
person.age = 33;
console.log(person, typeof person);

// Add a property
person.hasChildren = true;
console.log(person, typeof person);

// Add a functiom
person.greet = function () {
  console.log(`Hi my name is ${this.name.toUpperCase()}`);
};

person.greet();

