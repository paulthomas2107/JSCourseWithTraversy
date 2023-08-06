// Array Map
const arr1 = [1, 4, 9, 16];
// Pass function to map
const map1 = arr1.map((x) => x * 2);
console.log(map1);

const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

// Simple example with prefix added
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.reverse().map((number) => 'Number ' + number * 2);
console.log(doubleNumbers);

// For each example as above
const numbers2 = [1, 2, 3, 4, 5];
const doubleNumber2 = [];
numbers2.reverse().forEach((number) => {
  doubleNumber2.push(number * 2);
});
console.log(doubleNumber2);

// Create an array of company names
const comNames = companies.map((company) => company.name);
console.log(comNames);

// Create an array of company and category
const comAndCat = companies.map((company) => {
  return {
    // created returning object
    name: company.name,
    category: company.category,
  };
});
console.log(comAndCat);

// Create an array of name and company in years
const coInYears = companies.map((company) => {
  return {
    // created returning object
    name: company.name,
    timeSpan: company.end - company.start + ' Years',
  };
});
console.log(coInYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

// Long version
const squareAndDouble2 = numbers
  .reverse()
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });
console.log(squareAndDouble2);

// Other chaining methods
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenDouble = n1
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);

// Array Reduce - long
const numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArr = numbArr.reduce(function (accumulator, currentValue) {
  //  1 then 3 then 6 etc
  return accumulator + currentValue;
}, 0); // Initial Value - optional
console.log(sumArr); // 55

// Shorter Version
const sum2 = numbArr.reduce((acc, cur) => acc + cur, 10); // initial);
console.log(sum2); // 65

// Using for loop to reduce
const sum3 = () => {
  let acc = 20;
  for (const cur of numbArr) {
    acc += cur;
  }
  return acc;
};
console.log(sum3()); // 75

// Shoppimng Cart
const cart = [
  {
    id: 1,
    name: 'Product 1',
    price: 130,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 150,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 175,
  },
];

// Example easy
const cartSum = cart.reduce(
  (acc, productInCart) => acc + productInCart.price,
  0
); // initial);
console.log(cartSum);

// Array Method Challenges
// 1.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 38,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Joe',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

// Young people
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
  }));
console.log(youngPeople);

// Challenge 2
const numChal2 = [2, -38, 50, 20, -12, -9, 7];
const positiveSum = numChal2
  .filter((number) => number > 0)
  .reduce((acc, number) => acc + number, 0);
console.log(positiveSum); // 79

// Challnge 3
const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalizedWords);
