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
